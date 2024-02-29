import { FC } from 'react';

export const CheckIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      <path d="M4 12.6111L8.92308 17.5L20 6.5" />
    </svg>
  );
};
