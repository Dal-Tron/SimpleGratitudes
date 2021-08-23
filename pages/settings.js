import { useState, useRef } from 'react'
import { Input, Spin } from 'antd'
import { CheckOutlined, EyeTwoTone, EyeInvisibleOutlined, SmileTwoTone, DeleteOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

import { useAuth } from 'Context/auth'

const { Password } = Input;

const SettingsPage = () => {
  const updatePasswordInputRef = useRef();
  const router = useRouter();
  const { username } = useAuth();
  const { query: { access_token } } = router;
  const [updatePasswordSelected, setUpdatePasswordSelected] = useState(false);

  if (access_token) {
    setUpdatePasswordSelected(true);
    handleFocusPasswordInput();
  }

  if (!username) {
    router.push('/');
    return (
      <div className='loader'>
        <Spin size='large' indicator={<SmileTwoTone twoToneColor='#73b8cb' spin={true} />} />
      </div>
    )
  }

  const handlePasswordUpdateSwitchChange = (checked) => {
    setUpdatePasswordSelected(checked);
    handleFocusPasswordInput();
  }

  const handleFocusPasswordInput = () => {
    updatePasswordInputRef.current.focus();
  }

  const marks = {
    0: 'Daily',
    50: 'Weekly',
    100: 'Monthly',
    // 100: {
    //   style: {
    //     color: '#f50',
    //   },
    //   label: <strong>100°C</strong>,
    // },
  };

  const renderHidePasswordIcons = (visible) => {
    if (visible) {
      return <EyeTwoTone />;
    }

    return <EyeInvisibleOutlined />;
  }

  return (
    <div className='settings-wrapper settings-box-shadow'>
      <div className='settings'>
        <div className='settings-title'>Settings</div>
        <div className='settings-content'>
          <div className='settings-header'>Account</div>
          <div className='settings-body'>
            <div className='settings-option'>
              <div className='settings-new-password'>
                {/* <div
              className={`settings-new-password-label ${updatePasswordSelected ? 'settings-new-password-active' : ''}`}
              htmlFor='update-password-input'>
              new password
              </div> */}
                <Password
                  id='update-password-input'
                  className='settings-new-password-input'
                  size="large"
                  iconRender={renderHidePasswordIcons}
                  ref={updatePasswordInputRef}
                  placeholder='Enter new password'
                />
                <div>
                  <div className='settings-account-button'>
                    <CheckOutlined />
                  </div>
                </div>
              </div>
            </div>
            <div className='settings-option'>
              <div className='settings-label'>Delete account</div>
              <div className='settings-account-button'>
                <DeleteOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage;