import { SmileTwoTone } from '@ant-design/icons';
import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  indicator?: ReactNode;
  className?: string;
};

export const SpinLoading = ({
  indicator = <SmileTwoTone twoToneColor="#73b8cb" />,
  className,
}: Props) => {
  return (
    <div className={clsx('align-center w-full mt-8', className)}>
      <div className="animate-spin">{indicator}</div>
    </div>
  );
};
