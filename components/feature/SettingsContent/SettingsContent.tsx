import { IconButton } from '@/components/base/Button/IconButton';
import { Input } from '@/components/base/Input/Input';
import { Validator } from '@/components/base/Validator/Validator';
import { validPassword, validUsername } from '@/helpers/validation';
import { CheckIcon } from '@/icons/Check';
import { ClosedEyeIcon } from '@/icons/ClosedEye';
import { EyeIcon } from '@/icons/Eye';
import { TrashIcon } from '@/icons/Trash';
import { AuthService } from '@/services/auth';
import { useStore } from '@/store/store';
import clsx from 'clsx';
import { ChangeEvent, FormEvent, useState } from 'react';

export const SettingsContent = ({
  handleOpenUsernameConfirm,
  handleUsernameChange,
  username,
  usernameIsDirty,
}) => {
  const user = useStore((state) => state.user);
  const profile = useStore((state) => state.profile);

  const [passwordIsDirty, setPasswordIsDirty] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [deleteUsernameIsDirty, setDeleteUsernameIsDirty] = useState(false);
  const [password, setPassword] = useState('');
  const [deleteUsername, setDeleteUsername] = useState('');
  const [isLoading, setLoading] = useState(false);

  const isValidUsername = validUsername(username);
  const isValidPassword = validPassword(password);
  const isValidDeleteUsername = deleteUsername === profile?.username;

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

  const handleUpdatePassword = async (e: FormEvent) => {
    e.preventDefault();

    if (validPassword(password) && user.id)
      await AuthService.updateUserPassword(password);
  };

  const checkMatchingUsername = (username: string) =>
    username === profile?.username;

  const handleTogglePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleDeleteUser = async () => {
    if (!isValidDeleteUsername || !user?.id) return;

    setLoading(true);

    await AuthService.deleteUser();

    AuthService.signOut();
  };

  return (
    <div className="sg-box-shadow h-96 bg-primary-0 rounded-lg w-96 p-4 m-auto">
      <div className="p-4">
        <div className="flex justify-center text-2xl text-white mb-4">
          Settings
        </div>
        <div>
          <div className="text-lg text-white mb-2">
            {profile?.updated_username ? 'Username' : 'Change Username'}
          </div>

          {profile?.updated_username ? (
            <div className="text-white text-lg ml-2 font-bold">{username}</div>
          ) : (
            <div className="flex flex-row justify-between w-full items-center">
              <Validator
                className="mr-2 w-full"
                isDirty={usernameIsDirty}
                validator={validUsername}
                validationMsg="Invalid Username"
              >
                <Input
                  className="text-lg w-full"
                  disabled={profile?.updated_username}
                  placeholder="Enter a new username"
                  onChange={handleUsernameChange}
                  value={username}
                />
              </Validator>
              {profile?.updated_username ? null : (
                <IconButton
                  className={clsx('rounded-full h-10 w-10', {
                    'bg-white': isValidUsername,
                    'bg-primary-3': !isValidUsername,
                  })}
                  disabled={!isValidUsername}
                  onClick={handleOpenUsernameConfirm}
                >
                  <CheckIcon
                    className={clsx('w-6 h-6', {
                      'text-white': !isValidUsername,
                      'text-primary-3': isValidUsername,
                    })}
                  />
                </IconButton>
              )}
            </div>
          )}
          <form onSubmit={handleUpdatePassword}>
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
                  type={isPasswordVisible ? 'text' : 'password'}
                  autoComplete="new-password"
                  suffix={
                    <IconButton
                      onClick={handleTogglePasswordVisible}
                      theme="secondary"
                    >
                      {isPasswordVisible ? (
                        <ClosedEyeIcon className="w-6 h-6 text-white" />
                      ) : (
                        <EyeIcon className="w-6 h-6 text-white" />
                      )}
                    </IconButton>
                  }
                />
              </Validator>
              <IconButton
                type="submit"
                className={clsx('rounded-full h-10 w-10', {
                  'bg-white': isValidPassword,
                  'bg-primary-3': !isValidPassword,
                })}
                disabled={!isValidPassword}
              >
                <CheckIcon
                  className={clsx('w-6 h-6', {
                    'text-white': !isValidPassword,
                    'text-primary-3': isValidPassword,
                  })}
                />
              </IconButton>
            </div>
          </form>
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
              onClick={handleDeleteUser}
            >
              <TrashIcon
                className={clsx('w-6 h-6', {
                  'text-primary-2': isValidDeleteUsername,
                  'text-white': !isValidDeleteUsername,
                })}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
