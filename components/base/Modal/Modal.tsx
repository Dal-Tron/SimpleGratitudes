import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import { Button } from '@/components/base/Button/Button';
import { CloseIcon } from '@/icons/Close';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto"
      id="modal"
    >
      <div className="flex items-center justify-center h-full w-full -mt-20">
        <div className={clsx('relative rounded-md w-96 p-5', className)}>
          <Button
            className="m-4 text-gray-400 absolute top-0 right-0 z-10"
            onClick={onClose}
            ariaLabel="Close Modal"
          >
            <CloseIcon className="w-6 h-6 text-white" />
          </Button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
