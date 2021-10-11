import { useRef, useState, useEffect } from 'react'
import { notification, Modal } from 'antd'
import {
  CheckOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/router'

import { useAuthState, useAuthDispatch } from 'Context/auth'
import { useLoaderState, loaderKey } from 'Context/loader'

import { validPassword, validJWT, validUsername } from 'Helpers/validation'

import DeleteAccountInput from 'Components/DeleteAccountInput'
import FormInput from 'Components/FormInput'
import PasswordInput from 'Components/PasswordInput'
import UsernameNotice from 'Components/UsernameNotice'
import Loading from 'Components/Loading'

import withAuth from 'HOC/auth'

import AuthService from 'Services/auth'
import ProfileService from 'Services/profile'
import GratitudesService from 'Services/gratitudes'

const SettingsPage = () => {
  const updatePasswordInputRef = useRef();
  const router = useRouter();
  const {
    session,
    profile: { username, updated_username },
    user,
  } = useAuthState();
  const authDispatch = useAuthDispatch();
  const { loaders } = useLoaderState();

  const { query: { access_token } } = router;
  const [password, setPassword] = useState('');
  const [stateUsername, setUsername] = useState('');
  const [confirmDeleteAccount, setConfirmDeleteAccount] = useState(false);
  const [showConfirmUsername, setShowConfirmUsername] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (username && !stateUsername) {
      setUsername(username);
    }
  }, [username]);

  if (validJWT(access_token)) {
    updatePasswordInputRef?.current?.focus();
  }

  const handleUsernameChange = (usernameValue) => {
    setUsername(usernameValue);
  }

  const handleConfirmUsername = async () => {
    if (user.id && validUsername(stateUsername) && !updated_username) {
      const { error: updateUsernameError } = await ProfileService.updateProfileUsername(user.id, stateUsername);

      if (updateUsernameError) {
        if (updateUsernameError.message?.indexOf('duplicate') >= 0) {
          return handleError({ message: 'Username taken.' });
        }

        return handleError(updateUsernameError);
      }

      notification.open({
        type: 'success',
        message: 'Successfully updated username!',
        duration: 2,
      });

      authDispatch({
        type: 'set-username',
        username: stateUsername,
      });
      setShowConfirmUsername(false);
      return authDispatch({
        type: 'set-updated-username',
      });
    }
  }

  const handleCancelUpdateUsername = () => {
    // clear username
    setUsername('');
    return setShowConfirmUsername(false);
  }

  const handleUpdateUsername = () => {
    if (!updated_username) {
      setShowConfirmUsername(true);
    }
  }

  const handleUpdatePassword = async () => {
    if (validPassword(password)) {
      if (session.access_token) {
        const { error } = await AuthService.updateUser(session.access_token, { password });
        if (!error) {
          setPassword('');
          return notification.open({
            type: 'success',
            message: 'Successfully updated password!',
            duration: 2,
          });
        } else {
          return notification.open({
            type: 'error',
            message: error.message,
            duration: 2,
          });
        }
      }
    } else {
      return null;
    }
  }

  const handleConfirmDeleteAccount = (confirm = false) => {
    return setConfirmDeleteAccount(confirm);
  }

  const handleError = (err) => {
    notification.open({
      type: 'error',
      message: err.message ? err.message : 'Error deleting account.',
      duration: 2,
    });
  }

  const handleDeleteAccount = async () => {
    if (confirmDeleteAccount && user && user.id) {
      setLoading(true);

      try {
        const { error: deleteProfileError } = await ProfileService.deleteProfile(user.id);
        if (deleteProfileError) throw deleteProfileError;

        const { error: deleteGratitudesError } = await GratitudesService.deleteGratitudes(user.id);
        if (deleteGratitudesError) throw deleteGratitudesError;

        const { error: deleteUserError } = await AuthService.deleteUser();
        if (deleteUserError) throw deleteUserError;

        const { error: signOutError } = await AuthService.signOut();
        if (signOutError) {
          if (signOutError.message !== 'Invalid user') { handleError(signOutError); }
        };

        if (
          !deleteUserError
          && !deleteGratitudesError
        ) {
          notification.open({
            type: 'success',
            message: 'Successfully deleted user!',
            duration: 2,
          });
          return window.location.href = '/';
        }
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
          <div className='settings-wrapper settings-box-shadow'>
            <div className='settings'>
              <div className='settings-title'>Settings</div>
              <div className='settings-content'>
                {
                  loaders.includes(loaderKey.profile) ? <Loading indicator={<LoadingOutlined className='settings-content-username-loading' spin={true} />} /> : (
                    <>
                      <div className='settings-header'>{updated_username ? 'Username' : 'Change Username'}</div>
                      <div className='settings-body'>
                        <div className='settings-option'>
                          <div className='settings-new-username'>
                            {updated_username ? (
                              <div className='settings-new-cool-username'>{stateUsername}</div>
                            ) : (
                                <FormInput
                                  disabled={updated_username}
                                  inputValue={stateUsername}
                                  onChange={handleUsernameChange}
                                  placeholder='Enter new username'
                                  prefix={null}
                                  required={false}
                                  title='Username'
                                  tooltipVisible={false}
                                  triggerValidation={false}
                                  validator={validUsername}
                                />
                              )}
                            {updated_username ? null : (
                              <div onClick={handleUpdateUsername}
                                className={`settings-account-button 
                            ${validUsername(username) ? '' : 'settings-username-not-valid'}
                            ${updated_username ? 'settings-username-updated' : ''}
                          `}>
                                <CheckOutlined />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
                <div className='settings-header'>Change Password</div>
                <div className='settings-body'>
                  <div className='settings-option'>
                    <div className='settings-new-password'>
                      <PasswordInput
                        inputValue={password}
                        onChange={setPassword}
                        passwordRef={updatePasswordInputRef}
                        showPrefix={false}
                      />
                      <div onClick={handleUpdatePassword}
                        className={`settings-account-button ${validPassword(password) ? '' : 'settings-password-not-valid'}`}>
                        <CheckOutlined />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='settings-header'>Delete Account</div>
                <div className='settings-body'>
                  <div className='settings-option'>
                    <div className='settings-delete-input'>
                      <DeleteAccountInput handleConfirmDeleteAccount={handleConfirmDeleteAccount} />
                      <div onClick={handleDeleteAccount}
                        className={`settings-account-button ${confirmDeleteAccount ? '' : 'settings-password-not-valid'}`}>
                        <DeleteOutlined />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      <Modal
        className='username-confirm-modal'
        visible={showConfirmUsername}
        onCancel={handleCancelUpdateUsername}
        onOk={handleConfirmUsername}
        cancelButtonProps={{
          className: 'username-confirm-cancel-button'
        }}
      >
        <UsernameNotice username={stateUsername} setUsername={setUsername} />
      </Modal>
    </>
  )
}

export default withAuth(SettingsPage);