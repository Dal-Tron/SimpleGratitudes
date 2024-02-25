import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import { Loading } from '../Loading/Loading';

interface ButtonProps {
  children: ReactNode;
  loading?: boolean;
  onClick: () => void;
  type?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children,
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
    if (loading) return;

    onClick && onClick();
  };

  return (
    <button onClick={handleClick} className={styles}>
      {loading ? <Loading /> : children}
    </button>
  );
};
