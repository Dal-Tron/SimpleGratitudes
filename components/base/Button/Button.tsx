import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import { BounceLoading } from '@/components/base/Loading/BounceLoading';

interface ButtonProps {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  loading?: boolean;
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'custom';
  primaryColor?: string;
  accentColor?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  ariaLabel,
  children,
  className,
  disabled,
  loading,
  type,
  primaryColor,
  onClick,
}) => {
  const baseStyles =
    'px-4 py-2 rounded font-bold text-lg transition-colors duration-150';

  const customStyles =
    type === 'custom'
      ? {
          backgroundColor: primaryColor,
          color: 'white',
        }
      : {};

  const styles = clsx(baseStyles, {
    'bg-primary-2 text-white hover:bg-primary-3': type === 'primary',
    'bg-transparent text-white hover:text-secondary-1': type === 'secondary',
  });

  const handleClick = () => {
    if (loading || disabled) return;
    onClick && onClick();
  };

  return (
    <button
      aria-label={ariaLabel}
      onClick={handleClick}
      className={clsx(styles, className)}
      style={type === 'custom' ? customStyles : {}}
      disabled={disabled}
    >
      {loading ? <BounceLoading /> : children}
    </button>
  );
};
