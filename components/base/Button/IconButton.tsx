import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import { Loading } from '@/components/base/Loading/Loading';

interface IconButtonProps {
  ariaLabel?: string;
  children: ReactNode; // For the icon and any additional content
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
  type?: 'primary' | 'secondary';
}

export const IconButton: FC<IconButtonProps> = ({
  ariaLabel,
  children,
  className,
  disabled,
  loading,
  type,
  onClick,
}) => {
  const baseStyles =
    'rounded p-2 transition-colors duration-150 flex items-center justify-center';

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
