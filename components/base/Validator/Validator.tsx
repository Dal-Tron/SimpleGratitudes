import clsx from 'clsx';
import React, {
  ChangeEvent,
  ReactElement,
  cloneElement,
  useEffect,
  useState,
} from 'react';

import { Tooltip } from '@/components/base/Tooltip/Tooltip';

interface ValidatorProps {
  className?: string;
  isDirty: boolean;
  validator: (value: string) => boolean;
  children: ReactElement;
  validationMsg?: string;
}

export const Validator: React.FC<ValidatorProps> = ({
  className,
  isDirty,
  validator,
  children,
  validationMsg,
}) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false); // New state to track focus

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsValid(validator(newValue));

    if (children.props.onChange) {
      children.props.onChange(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (children.props.onFocus) {
      children.props.onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (children.props.onBlur) {
      children.props.onBlur(e);
    }
  };

  useEffect(() => {
    if (isDirty) {
      setIsValid(validator(value));
    }
  }, [isDirty, value, validator]);

  const inputClassName = clsx(children.props.className, {
    'border-green-500': isDirty && isValid,
    'border-red-500': isDirty && !isValid,
  });

  const extendedProps = {
    ...children.props,
    className: inputClassName,
    value: value,
    onChange: handleChange,
  };

  const clonedChildren = cloneElement(children, extendedProps);

  const showWarning = validationMsg && isDirty && !isValid && isFocused;

  return (
    <div
      className={clsx('p-2 rounded-lg border-2 w-full', className, {
        'border-primary-3': showWarning,
        'border-primary-4': !showWarning,
      })}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Tooltip title={validationMsg} show={showWarning}>
        {clonedChildren}
      </Tooltip>
    </div>
  );
};
