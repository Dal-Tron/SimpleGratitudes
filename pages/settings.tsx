import { notification } from 'antd';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';

import { Input } from '@/components/base/Input/Input';
import { Modal } from '@/components/base/Modal/Modal';
import { UsernameNotice } from '@/components/feature/UsernameNotice/UsernameNotice';
import { validJWT, validPassword, validUsername } from '@/helpers/validation';
import { CheckIcon } from '@/icons/Check';
import { TrashIcon } from '@/icons/Trash';
import { useStore } from '@/store/store';
import { Button } from 'Components/base/Button/Button';
import { IconButton } from 'Components/base/Button/IconButton';
import { Validator } from 'Components/base/Validator/Validator';
import Loading from 'Components/Loading';
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
  const [deleteUsername, setDeleteUsername] = useState('');
  const [confirmDeleteAccount, setConfirmDeleteAccount] = useState(false);
  const [showConfirmUsername, setShowConfirmUsername] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usernameIsDirty, setUsernameIsDirty] = useState(false);
  const [passwordIsDirty, setPasswordIsDirty] = useState(false);
  const [deleteUsernameIsDirty, setDeleteUsernameIsDirty] = useState(false);

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

  const handleDeleteUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!deleteUsernameIsDirty) setDeleteUsernameIsDirty(true);

    setDeleteUsername(value);
  };

  const handleCancelUpdateUsername = () => {
    // clear username
    setUsername('');
    return setShowConfirmUsername(false);
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

  const isValidUsername = validUsername(username) && username;
  const isValidPassword = validPassword(password);
  const isValidDeleteUsername = deleteUsername === profile?.username;

  const checkMatchingUsername = (username: string) =>
    username === profile?.username;

  const handleCloseUsernameConfirm = () => {
    setShowConfirmUsername(false);
  };

  const handleOpenUsernameConfirm = () => {
    if (!profile?.username_updated) {
      setShowConfirmUsername(true);
    }
  };

  const handleConfirmUsername = async () => {
    if (user.id && validUsername(username) && !profile?.username_updated) {
      try {
        const { error } = await ProfileService.updateProfileUsername(
          user.id,
          username,
        );

        if (error) throw error;

        notification.open({
          type: 'success',
          message: 'Successfully updated username!',
          duration: 2,
        });
      } catch (err) {
        if (err.message?.indexOf('duplicate') >= 0) {
          return handleError(new Error('Username is unavailable'));
        }

        return handleError(new Error('Unable to register username'));
      } finally {
        setShowConfirmUsername(false);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="sg-box-shadow h-96 bg-primary-0 rounded-lg w-96 p-4">
          <div className="p-4">
            <div className="flex justify-center text-2xl text-white mb-4">
              Settings
            </div>
            <div>
              <div className="text-lg text-white mb-2">
                {profile?.username_updated ? 'Username' : 'Change Username'}
              </div>

              {profile?.username_updated ? (
                <div className="settings-new-cool-username">{username}</div>
              ) : (
                <div className="flex flex-row justify-between w-full items-center">
                  <Validator
                    className="mr-2"
                    isDirty={usernameIsDirty}
                    validator={validUsername}
                    validationMsg="Invalid Username"
                  >
                    <Input
                      className="text-lg w-full"
                      disabled={profile?.username_updated}
                      placeholder="Enter a new username"
                      onChange={handleUsernameChange}
                      value={username}
                    />
                  </Validator>
                  {profile?.username_updated ? null : (
                    <IconButton
                      className={clsx('rounded-full h-10 w-10', {
                        'bg-white': isValidUsername,
                        'bg-primary-3': !isValidUsername,
                      })}
                      disabled={!isValidUsername}
                      onClick={handleOpenUsernameConfirm}
                    >
                      <CheckIcon
                        className={clsx('w-6 h-6 text-white', {
                          'text-primary-3': isValidUsername,
                        })}
                      />
                    </IconButton>
                  )}
                </div>
              )}
              <div className="text-lg text-white my-2">Change Password</div>
              <div className="flex flex-row justify-between w-full items-center">
                <Validator
                  isDirty={passwordIsDirty}
                  validator={validPassword}
                  validationMsg="Invalid Password"
                  className="mr-2"
                >
                  <Input
                    className="w-full text-lg"
                    placeholder="Enter a new password"
                    onChange={handlePasswordChange}
                    value={password}
                    type="password"
                  />
                </Validator>
                <IconButton
                  className={clsx('rounded-full h-10 w-10', {
                    'bg-white': isValidPassword,
                    'bg-primary-3': !isValidPassword,
                  })}
                  disabled={!isValidPassword}
                  onClick={handleUpdatePassword}
                >
                  <CheckIcon
                    className={clsx('w-6 h-6 text-white', {
                      'text-primary-2': isValidPassword,
                    })}
                  />
                </IconButton>
              </div>
              <div className="text-lg text-white my-2">Delete Account</div>
              <div className="flex flex-row justify-between w-full items-center">
                <Validator
                  isDirty={deleteUsernameIsDirty}
                  validator={checkMatchingUsername}
                  validationMsg="Invalid Username"
                  className="mr-2"
                >
                  <Input
                    className="w-full text-lg"
                    placeholder="Enter your username"
                    onChange={handleDeleteUsernameChange}
                    value={deleteUsername}
                  />
                </Validator>
                <IconButton
                  className={clsx('rounded-full h-10 w-10', {
                    'bg-white': isValidDeleteUsername,
                    'bg-primary-3': !isValidDeleteUsername,
                  })}
                  disabled={!isValidDeleteUsername}
                  onClick={handleUpdatePassword}
                >
                  <TrashIcon
                    className={clsx('w-6 h-6 text-white', {
                      'text-primary-2': isValidDeleteUsername,
                    })}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal
        onClose={handleCloseUsernameConfirm}
        className="bg-primary-0 sg-box-shadow w-132 py-8"
        isOpen={showConfirmUsername}
      >
        <>
          <UsernameNotice username={username} setUsername={setUsername} />
          <div className="flex justify-center mt-4">
            <Button onClick={handleConfirmUsername} type="primary">
              I understand
            </Button>
          </div>
        </>
      </Modal>
    </>
  );
};

export default SettingsPage;
