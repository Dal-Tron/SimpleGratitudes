import clsx from 'clsx';
import { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';

interface InputProps {
  className?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  value?: string;
  prefix?: ReactNode;
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
  prefix,
}) => {
  return (
    <div className="flex items-center">
      {prefix && <div className="mr-2">{prefix}</div>}
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
    </div>
  );
};
