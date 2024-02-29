import clsx from 'clsx';
import { ChangeEventHandler, FocusEventHandler } from 'react';

interface InputProps {
  className?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  disabled,
  onChange,
  name,
  onBlur,
  placeholder,
  type = 'text',
  value,
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      className={clsx(
        'bg-transparent text-white border-none p-0 outline-none max-w-xs',
        'placeholder-white placeholder-opacity-70 placeholder:text-base',
        'focus:ring-0 focus:border-none',
        className,
      )}
      disabled={disabled}
      onBlur={onBlur}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};
