import { createRef, useState } from 'react'
import { Input, Tooltip } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons'

import { validPassword } from 'Helpers/validation'

const defaultRef = createRef();
const { Password } = Input;

const PasswordInput = ({
  handlePassword = () => { },
  passwordRef = defaultRef,
  showPrefix = true,
}) => {
  const [showPasswordNotice, setShowPasswordNotice] = useState(false);
  const [tooltipPasswordTitle, setTooltipPasswordTitle] = useState('Enter password');

  const handleUpdatePasswordChange = (event) => {
    const passwordValue = event.target.value;

    if (validPassword(passwordValue)) {
      handlePassword(passwordValue);
      return setShowPasswordNotice(false);
    }

    setShowPasswordNotice(true);
    setTooltipPasswordTitle('Password needs to be minimum of 8 characters');
    handlePassword(passwordValue);
  }

  const renderHidePasswordIcons = (visible) => {
    if (visible) {
      return <EyeTwoTone />;
    }

    return <EyeInvisibleOutlined />;
  }

  return (
    <Tooltip
      title={tooltipPasswordTitle}
      placement='bottom'
      visible={showPasswordNotice}
    >
      <Password
        className='settings-new-password-input'
        iconRender={renderHidePasswordIcons}
        id='update-password-input'
        onChange={handleUpdatePasswordChange}
        placeholder='Enter new password'
        prefix={showPrefix ? <LockOutlined /> : null}
        ref={passwordRef}
        size="large"
      />
    </Tooltip>
  )
}

export default PasswordInput;