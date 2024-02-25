import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { createRef, useState, useEffect } from 'react';

import { validPassword } from 'Helpers/validation';

const defaultRef = createRef();
const { Password } = Input;

const PasswordInput = ({
  inputValue = '',
  onChange = () => {},
  passwordRef = defaultRef,
  required = true,
  showPrefix = true,
  triggerValidation = false,
}) => {
  const [showPasswordNotice, setShowPasswordNotice] = useState(false);
  const [tooltipPasswordTitle, setTooltipPasswordTitle] =
    useState('Invalid Password');
  const [inputRequired, setInputRequired] = useState(false);

  useEffect(() => {
    // used to trigger required className
    if (triggerValidation && required) {
      if (inputValue.length < 1) {
        setInputRequired(true);

        setTimeout(() => {
          setInputRequired(false);
        }, 2000);
      }
    }
  }, [triggerValidation]);

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (!validPassword(inputValue)) {
      setShowPasswordNotice(true);

      return onChange(inputValue);
    }

    setShowPasswordNotice(false);

    return onChange(inputValue);
  };

  const renderHidePasswordIcons = (visible) => {
    if (visible) {
      return <EyeTwoTone />;
    }

    return <EyeInvisibleOutlined />;
  };

  return (
    <Tooltip
      title={tooltipPasswordTitle}
      placement="bottom"
      visible={showPasswordNotice}
    >
      <Password
        className={`password-input ${inputRequired ? 'input-required' : ''}`}
        iconRender={renderHidePasswordIcons}
        id="update-password-input"
        onChange={handleChange}
        placeholder="Enter new password"
        prefix={
          showPrefix ? <LockOutlined className="password-prefix" /> : null
        }
        ref={passwordRef}
        size="large"
        value={inputValue}
      />
    </Tooltip>
  );
};

export default PasswordInput;
