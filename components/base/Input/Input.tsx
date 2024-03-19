import clsx from 'clsx';
import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';

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
  const handleClick: MouseEventHandler<HTMLInputElement> = (event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div className="flex items-center relative w-full">
      {prefix && <div className="flex-shrink-0 ml-1">{prefix}</div>}
      <input
        type={type}
        onChange={onChange}
        className={clsx(
          'bg-transparent text-white border-none p-2 outline-none w-full',
          'placeholder-white placeholder-opacity-70 placeholder:text-base',
          'focus:ring-0 focus:border-none',
          {
            'pl-2': prefix,
            'pr-8': suffix,
            'opacity-50 cursor-not-allowed': disabled,
          },
          className,
        )}
        disabled={disabled}
        onBlur={onBlur}
        onClick={handleClick}
        name={name}
        placeholder={placeholder}
        value={value}
      />
      {suffix && <div className="ml-2 flex-shrink-0">{suffix}</div>}
    </div>
  );
};
