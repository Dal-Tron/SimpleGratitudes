import { BounceLoading } from '@/components/base/Loading/BounceLoading';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface IconButtonProps {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  theme?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export const IconButton: FC<IconButtonProps> = ({
  ariaLabel,
  children,
  className,
  disabled,
  loading,
  onClick,
  theme = 'primary',
  type = 'button',
}) => {
  const baseStyles =
    'rounded p-2 transition-colors duration-150 flex items-center justify-center';

  const themeStyles = {
    primary: 'bg-primary-2 text-white hover:bg-primary-3',
    secondary: 'bg-transparent text-white hover:text-secondary-1',
  };

  const styles = clsx(
    baseStyles,
    themeStyles[theme] || themeStyles['primary'],
    className,
  );

  const handleClick = () => {
    if (loading || disabled) return;
    onClick?.();
  };

  return (
    <button
      aria-label={ariaLabel}
      type={type}
      onClick={handleClick}
      className={styles}
      disabled={disabled}
    >
      {loading ? <BounceLoading /> : children}
    </button>
  );
};
