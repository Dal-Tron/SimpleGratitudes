import clsx from 'clsx';
import {
  ChangeEvent,
  ReactElement,
  cloneElement,
  useEffect,
  useState,
} from 'react';

interface ValidatorProps {
  isDirty: boolean;
  validator: (value: string) => boolean;
  children: ReactElement;
  validationMsg?: string;
}

export const Validator: React.FC<ValidatorProps> = ({
  isDirty,
  validator,
  children,
  validationMsg,
}) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsValid(validator(newValue));

    // Call the original onChange handler if it exists
    if (children.props.onChange) {
      children.props.onChange(e);
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

  const clonedChildren = cloneElement(children, {
    className: inputClassName,
    value,
    onChange: handleChange,
  });

  return (
    <div>
      {clonedChildren}
      {isDirty && !isValid && validationMsg && (
        <p className="text-red-500">{validationMsg}</p>
      )}
    </div>
  );
};
