import { SmileIcon } from '@/icons/Smile';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export const SpinLoading = ({ className }: Props) => {
  return (
    <div className={clsx('align-center', className)}>
      <SmileIcon className="animate-spin border-2 border-white rounded-full w-12 h-12" />
    </div>
  );
};
