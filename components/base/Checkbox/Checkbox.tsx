import clsx from 'clsx';
import { FC, ReactNode, useCallback } from 'react';

interface CheckboxProps {
  className?: string;
  checked: boolean;
  onClick: (checked: boolean) => void;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  checked,
  onClick,
  disabled = false,
  prefix,
  suffix,
}) => {
  const handleToggle = useCallback(() => {
    if (!disabled) {
      onClick(!checked);
    }
  }, [checked, onClick, disabled]);

  return (
    <div
      className={clsx('flex flex-row items-center', {
        'opacity-50': disabled,
      })}
    >
      {prefix && (
        <div
          className={clsx('cursor-pointer mr-2', {
            'cursor-not-allowed': disabled,
          })}
          onClick={handleToggle}
        >
          {prefix}
        </div>
      )}
      <input
        type="checkbox"
        checked={checked}
        onClick={handleToggle}
        disabled={disabled}
        className="custom-checkbox cursor-pointer w-4 h-4 rounded-full border-none outline-none"
      />
      {suffix && (
        <div
          className={clsx('cursor-pointer ml-2', {
            'cursor-not-allowed': disabled,
          })}
          onClick={handleToggle}
        >
          {suffix}
        </div>
      )}
    </div>
  );
};
