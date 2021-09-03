import { useRef, useState } from 'react'
import { notification } from 'antd'
import {
  CheckOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/router'
import { supabase } from 'Supabase/client'

import { useAuth } from 'Context/auth'

import { validPassword, validJWT } from 'Helpers/validation'

import PasswordInput from 'Components/PasswordInput'
import DeleteAccountInput from '../components/DeleteAccountInput'
import Loading from 'Components/Loading'

const SettingsPage = () => {
  const updatePasswordInputRef = useRef();
  const router = useRouter();
  const {
    accessToken,
    deleteGratitudes,
    deleteUser,
    signOut,
    username,
  } = useAuth();

  const { query: { access_token } } = router;
  const [password, setPassword] = useState('');
  const [confirmDeleteAccount, setConfirmDeleteAccount] = useState(false);
  const [triggerValidation, setTriggerValidation] = useState(false);

  if (access_token) {
    if (updatePasswordInputRef && updatePasswordInputRef.current) {
      updatePasswordInputRef.current.focus();
    }
  }

  if (!username && !accessToken && !access_token) {
    router.push('/');
    return (
      <Loading />
    )
  }

  if (validJWT(access_token)) {
    updatePasswordInputRef?.current?.focus();
  }

  const handleUpdatePassword = async () => {
    setTriggerValidation(true);

    if (validPassword(password)) {
      if (accessToken) {
        const { error } = await supabase.auth.api.updateUser(accessToken, { password });
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
    }
  }

  const handleConfirmDeleteAccount = (confirm = false) => {
    return setConfirmDeleteAccount(confirm);
  }

  const handleDeleteAccount = async () => {
    if (confirmDeleteAccount) {
      const { error: deleteGratitudesError } = await deleteGratitudes();
      const { error: deleteUserError } = await deleteUser();
      const { error: signOutError } = await signOut();

      if (
        !deleteUserError
        && !deleteGratitudesError
      ) {
        notification.open({
          type: 'success',
          message: 'Successfully deleted user!',
          duration: 2,
        });
        return router.push('/');
      }

      return notification.open({
        type: 'error',
        message: 'Error deleting user',
        duration: 2,
      });
    }
  }

  return (
    <div className='settings-wrapper settings-box-shadow'>
      <div className='settings'>
        <div className='settings-title'>Settings</div>
        <div className='settings-content'>
          <div className='settings-header'>Change Password</div>
          <div className='settings-body'>
            <div className='settings-option'>
              <div className='settings-new-password'>
                <PasswordInput
                  inputValue={password}
                  onChange={setPassword}
                  passwordRef={updatePasswordInputRef}
                  showPrefix={false}
                  triggerValidation={triggerValidation}
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
  )
}

export default SettingsPage;