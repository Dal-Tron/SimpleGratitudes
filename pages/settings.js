import { useRef, useState } from 'react'
import { Spin, notification } from 'antd'
import {
  CheckOutlined,
  SmileTwoTone,
  DeleteOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/router'
import { supabase } from 'Supabase/client'

import { useAuth } from 'Context/auth'

import { validPassword } from 'Helpers/validation'

import PasswordInput from 'Components/PasswordInput'
import DeleteAccountInput from '../components/DeleteAccountInput'

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

  if (access_token) {
    updatePasswordInputRef.current.focus();
  }

  if (!username) {
    router.push('/');
    return (
      <div className='loader'>
        <Spin size='large' indicator={<SmileTwoTone twoToneColor='#73b8cb' spin={true} />} />
      </div>
    )
  }

  const handleUpdatePassword = async () => {
    if (accessToken) {
      if (validPassword(password)) {
        const { error } = await supabase.auth.api.updateUser(accessToken, { password });
        if (!error) {
          updatePasswordInputRef.current.input.value = '';
          updatePasswordInputRef.current.state.value = '';
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

    return router.push('/');
  }

  const handleConfirmDeleteAccount = (confirm = false) => {
    return setConfirmDeleteAccount(confirm);
  }

  const handleDeleteAccount = async () => {
    const { error: deleteGratitudesError } = await deleteGratitudes();
    const { error: deleteUserError } = await deleteUser();
    const { error: signOutError } = await signOut();

    if (
      !deleteUserError
      && !deleteGratitudesError
      && confirmDeleteAccount) {
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
                  passwordRef={updatePasswordInputRef}
                  handlePassword={(pass) => setPassword(pass)}
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
  )
}

export default SettingsPage;