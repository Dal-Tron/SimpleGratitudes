import { SmileTwoTone } from '@ant-design/icons';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export const SpinLoading = ({ className }: Props) => {
  return (
    <div className={clsx('align-center', className)}>
      <SmileTwoTone twoToneColor="#73b8cb" className="animate-spin" />
    </div>
  );
};
