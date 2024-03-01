import clsx from 'clsx';
import { ChangeEventHandler, FC, FocusEventHandler, ReactNode } from 'react';

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
  suffix?: ReactNode;
}

export const Input: FC<InputProps> = ({
  className,
  disabled,
  onChange,
  name,
  onBlur,
  placeholder,
  type = 'text',
  value,
  prefix,
  suffix,
}) => {
  return (
    <div className="flex items-center relative w-full">
      {prefix && <div className="absolute left-2">{prefix}</div>}
      <input
        type={type}
        onChange={onChange}
        className={clsx(
          'bg-transparent text-white border-none p-2 pl-10 pr-8 outline-none max-w-xs w-full',
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
      {suffix && <div className="absolute right-2">{suffix}</div>}
    </div>
  );
};
