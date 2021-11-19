import { useState, useEffect, createRef } from 'react'
import { Tooltip, Input } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'

const { Password } = Input;
const defaultRef = createRef();

const FormInput = ({
  className = '',
  disabled = false,
  inputRef = defaultRef,
  inputValue = '',
  onChange = () => { },
  name = '',
  passwordInput = false,
  placeholder = '',
  prefix = <></>,
  required = false,
  size = 'large',
  title = '',
  tooltipVisible = false,
  triggerValidation = false,
  validator = () => { },
}) => {
  const [showInputTooltip, setShowInputTooltip] = useState(false);
  const [tooltipTitle, setToolTipTitle] = useState(`Invalid ${title}`);
  const [inputRequired, setInputRequired] = useState(false);

  useEffect(() => {
    if (!tooltipVisible && showInputTooltip) {
      setShowInputTooltip(false);
    }
  }, [tooltipVisible]);

  useEffect(() => {
    const checkEmailInputId = setInterval(() => {
      // there is a current bug that doesn't catch autofill 
      // https://github.com/formium/formik/issues/3165
      if (document && document.querySelector('input[name="email"]')?.value && name === 'email') inputValue = document.querySelector('input[name="email"]')?.value;
    }, 2000);

    return () => clearInterval(checkEmailInputId);
  }, []);

  useEffect(() => {
    // used to flash class when trigger value changes
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

    if (!validator(inputValue)) {
      setShowInputTooltip(true);

      return onChange(inputValue);
    }

    setShowInputTooltip(false);

    return onChange(inputValue);
  }

  const renderHidePasswordIcons = (visible) => {
    if (visible) {
      return <EyeTwoTone />;
    }

    return <EyeInvisibleOutlined />;
  }

  const renderInput = () => {
    if (passwordInput) {
      return (
        <Password
          className={`input ${className ? className : ''} ${inputRequired ? 'input-required' : ''}`}
          disabled={disabled}
          iconRender={renderHidePasswordIcons}
          id='update-password-input'
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          prefix={prefix}
          ref={inputRef}
          size={size}
          value={inputValue}
        />
      );
    }

    return (
      <Input
        onInput={handleChange}
        className={`input ${className ? className : ''} ${inputRequired ? 'input-required' : ''}`}
        disabled={disabled}
        onBlur={handleChange}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        prefix={prefix}
        ref={inputRef}
        size={size}
        value={inputValue}
      />
    )
  }

  return (
    <Tooltip
      title={tooltipTitle}
      placement='bottom'
      visible={showInputTooltip}
    >
      {renderInput()}
    </Tooltip>
  )
}

export default FormInput;