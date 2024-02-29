import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import { Loading } from '../Loading/Loading';

interface ButtonProps {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  loading?: boolean;
  onClick: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  ariaLabel,
  children,
  className,
  disabled,
  loading,
  type,
  onClick,
}) => {
  const baseStyles =
    'px-4 py-2 rounded font-bold text-lg transition-colors duration-150';

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
      disabled={disabled}
    >
      {loading ? <Loading /> : children}
    </button>
  );
};
