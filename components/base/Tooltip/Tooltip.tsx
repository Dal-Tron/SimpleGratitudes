import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  className?: string;
  title: string;
  show: boolean;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  className,
  title,
  show,
}) => {
  return (
    <div className="relative flex items-center">
      {children}
      {show && (
        <div
          className={clsx(
            'absolute bottom-full mb-2 p-2 text-xs rounded bg-primary-2 text-white',
            className,
          )}
        >
          {title}
        </div>
      )}
    </div>
  );
};
