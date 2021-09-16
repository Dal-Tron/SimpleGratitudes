import { useRef, useState, useEffect } from 'react'
import { notification, Modal } from 'antd'
import {
  CheckOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/router'

import { useAuth } from 'Context/auth'

import { validPassword, validJWT, validUsername } from 'Helpers/validation'

import DeleteAccountInput from 'Components/DeleteAccountInput'
import FormInput from 'Components/FormInput'
import PasswordInput from 'Components/PasswordInput'
import UsernameNotice from 'Components/UsernameNotice'

import withAuth from 'HOC/auth'

import AuthService from 'Services/auth'
import ProfileService from 'Services/profile'
import GratitudesService from 'Services/gratitudes'

const SettingsPage = () => {
  const updatePasswordInputRef = useRef();
  const router = useRouter();
  const {
    session,
    username,
    updated_username,
    updateUsername,
    updateUsernameUpdated,
  } = useAuth();
  const { user } = useAuth();

  const { query: { access_token } } = router;
  const [password, setPassword] = useState('');
  const [stateUsername, setUsername] = useState('');
  const [confirmDeleteAccount, setConfirmDeleteAccount] = useState(false);
  const [showConfirmUsername, setShowConfirmUsername] = useState(false);

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

  const handleConfirmUsername = () => {
    if (user.id && validUsername(stateUsername) && !updated_username) {
      const { error: updateUsernameError } = ProfileService.updateProfileUsername(user.id, stateUsername);

      if (updateUsernameError) return handleError(updateUsernameError);

      notification.open({
        type: 'success',
        message: 'Successfully updated username!',
        duration: 2,
      });

      updateUsername(stateUsername);
      setShowConfirmUsername(false);
      return updateUsernameUpdated();
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
    //TODO: handle signout error on server-side
    if (confirmDeleteAccount && user && user.id) {
      const { error: deleteProfileError } = await ProfileService.deleteProfile(user.id);

      if (deleteProfileError) {
        return handleError(deleteProfileError);
      }

      const { error: deleteGratitudesError } = await GratitudesService.deleteGratitudes(user.id);

      if (deleteGratitudesError) {
        return handleError(deleteGratitudesError);
      }

      const { error: deleteUserError } = await AuthService.deleteUser();

      if (deleteUserError) {
        return handleError(deleteUserError);
      }

      const { error: signOutError } = await AuthService.signOut();

      if (signOutError) {
        return handleError(signOutError);
      }

      if (
        !deleteUserError
        && !deleteGratitudesError
      ) {
        notification.open({
          type: 'success',
          message: 'Successfully deleted user!',
          duration: 2,
        });
        router.push('/');
        return window.location.href = '/';
      }

      return notification.open({
        type: 'error',
        message: 'Error deleting user',
        duration: 2,
      });
    }
  }
  return (
    <>
      <div className='settings-wrapper settings-box-shadow'>
        <div className='settings'>
          <div className='settings-title'>Settings</div>
          <div className='settings-content'>
            <div className='settings-header'>Change Username</div>
            <div className='settings-body'>
              <div className='settings-option'>
                <div className='settings-new-username'>
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
                  <div onClick={handleUpdateUsername}
                    className={`settings-account-button 
                      ${validUsername(username) ? '' : 'settings-username-not-valid'}
                      ${updated_username ? 'settings-username-updated' : ''}
                      `}>
                    <CheckOutlined />
                  </div>
                </div>
              </div>
            </div>
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
      <Modal
        className='username-confirm-modal'
        visible={showConfirmUsername}
        onCancel={handleCancelUpdateUsername}
        onOk={handleConfirmUsername}
      >
        <UsernameNotice username={stateUsername} setUsername={setUsername} />
      </Modal>
    </>
  )
}

export default withAuth(SettingsPage);