import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Modal, notification } from 'antd';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';

import { Input } from '@/components/base/Input/Input';
import { DeleteAccountInput } from '@/components/feature/DeleteAccountInput/DeleteAccountInput';
import { useStore } from '@/store/store';
import { Validator } from 'Components/base/Validator/Validator';
import Loading from 'Components/Loading';
import UsernameNotice from 'Components/UsernameNotice';
import { validJWT, validPassword, validUsername } from 'Helpers/validation';
import { AuthService } from 'Services/auth';
import { GratitudesService } from 'Services/gratitudes';
import { ProfileService } from 'Services/profile';

const SettingsPage = () => {
  const updatePasswordInputRef = useRef();
  const router = useRouter();
  const profile = useStore((state) => state.profile);
  const user = useStore((state) => state.user);

  const {
    query: { access_token },
  } = router;
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(profile?.username || '');
  const [confirmDeleteAccount, setConfirmDeleteAccount] = useState(false);
  const [showConfirmUsername, setShowConfirmUsername] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usernameIsDirty, setUsernameIsDirty] = useState(false);
  const [passwordIsDirty, setPasswordIsDirty] = useState(false);

  if (validJWT(access_token)) {
    updatePasswordInputRef?.current?.focus();
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!usernameIsDirty) setUsernameIsDirty(true);

    setUsername(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!passwordIsDirty) setPasswordIsDirty(true);

    setPassword(value);
  };

  const handleConfirmUsername = async () => {
    if (user.id && validUsername(username) && !profile?.username_updated) {
      const { error: updateUsernameError } =
        await ProfileService.updateProfileUsername(user.id, username);

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

      setShowConfirmUsername(false);
    }
  };

  const handleCancelUpdateUsername = () => {
    // clear username
    setUsername('');
    return setShowConfirmUsername(false);
  };

  const handleUpdateUsername = () => {
    if (!profile?.username_updated) {
      setShowConfirmUsername(true);
    }
  };

  const handleUpdatePassword = async () => {
    if (validPassword(password)) {
      if (session.access_token) {
        const { error } = await AuthService.updateUser({ password });
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
      } else {
        return notification.open({
          type: 'error',
          message: 'You must sign in again to change passwords.',
          duration: 2,
        });
      }
    } else {
      return null;
    }
  };

  const handleConfirmDeleteAccount = (confirm = false) => {
    return setConfirmDeleteAccount(confirm);
  };

  const handleError = (err) => {
    notification.open({
      type: 'error',
      message: err.message ? err.message : 'Error deleting account.',
      duration: 2,
    });
  };

  const handleDeleteAccount = async () => {
    if (confirmDeleteAccount && user && user.id) {
      setLoading(true);

      try {
        const { error: deleteProfileError } =
          await ProfileService.deleteProfile(user.id);
        if (deleteProfileError) throw deleteProfileError;

        const { error: deleteGratitudesError } =
          await GratitudesService.deleteGratitudes(user.id);
        if (deleteGratitudesError) throw deleteGratitudesError;

        const { error: deleteUserError } = await AuthService.deleteUser();
        if (deleteUserError) throw deleteUserError;

        const { error: signOutError } = await AuthService.signOut();
        if (signOutError) {
          if (signOutError.message !== 'Invalid user') {
            handleError(signOutError);
          }
        }

        if (!deleteUserError && !deleteGratitudesError) {
          notification.open({
            type: 'success',
            message: 'Successfully deleted user!',
            duration: 2,
          });
          return (window.location.href = '/');
        }
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="settings-wrapper settings-box-shadow">
          <div className="settings">
            <div className="settings-title">Settings</div>
            <div className="settings-content">
              <div className="settings-header">
                {profile?.username_updated ? 'Username' : 'Change Username'}
              </div>
              <div className="settings-body">
                <div className="settings-option">
                  <div className="settings-new-username">
                    {profile?.username_updated ? (
                      <div className="settings-new-cool-username">
                        {username}
                      </div>
                    ) : (
                      <Validator
                        isDirty={usernameIsDirty}
                        validator={validUsername}
                        validationMsg="Invalid Username"
                      >
                        <Input
                          disabled={profile?.username_updated}
                          placeholder="Enter a new username"
                          onChange={handleUsernameChange}
                          value={username}
                        />
                      </Validator>
                    )}
                    {profile?.username_updated ? null : (
                      <div
                        onClick={handleUpdateUsername}
                        className={clsx('settings-account-button', {
                          'settings-username-not-valid':
                            !validUsername(username),
                          'settings-username-updated':
                            profile?.username_updated,
                        })}
                      >
                        <CheckOutlined />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="settings-header">Change Password</div>
              <div className="settings-body">
                <div className="settings-option">
                  <div className="settings-new-password">
                    <Validator
                      isDirty={passwordIsDirty}
                      validator={validPassword}
                      validationMsg="Invalid Password"
                    >
                      <Input
                        placeholder="Enter a new password"
                        onChange={handlePasswordChange}
                        value={password}
                        type="password"
                      />
                    </Validator>
                    <div
                      onClick={handleUpdatePassword}
                      className={clsx('settings-account-button', {
                        'settings-password-not-valid': !validPassword(password),
                      })}
                    >
                      <CheckOutlined />
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-header">Delete Account</div>
              <div className="settings-body">
                <div className="settings-option">
                  <div className="settings-delete-input">
                    <DeleteAccountInput
                      handleConfirmDeleteAccount={handleConfirmDeleteAccount}
                    />
                    <div
                      onClick={handleDeleteAccount}
                      className={clsx('settings-account-button', {
                        'settings-password-not-valid': !confirmDeleteAccount,
                      })}
                    >
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
        className="username-confirm-modal"
        visible={showConfirmUsername}
        onCancel={handleCancelUpdateUsername}
        onOk={handleConfirmUsername}
        cancelButtonProps={{
          className: 'username-confirm-cancel-button',
        }}
      >
        <UsernameNotice username={username} setUsername={setUsername} />
      </Modal>
    </>
  );
};

export default SettingsPage;
