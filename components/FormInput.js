import { useState, useEffect } from 'react'
import { Tooltip, Input } from 'antd'

const FormInput = ({
  inputValue = '',
  onChange = () => { },
  placeholder = '',
  prefix = <></>,
  title = '',
  tooltipVisible = false,
  validator = () => { },
  triggerValidation = false,
  required = false,
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

  return (
    <Tooltip
      title={tooltipTitle}
      placement='bottom'
      visible={showInputTooltip}
    >
      <Input
        className={`${inputRequired ? 'input-required' : ''}`}
        onChange={handleChange}
        placeholder={placeholder}
        prefix={prefix}
        value={inputValue}
      />
    </Tooltip>
  )
}

export default FormInput;