import { SmileIcon } from '@/icons/Smile';
import { Empty } from 'antd';
import clsx from 'clsx';

export const EmptyMessage = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('empty-data', className)}>
      <Empty
        description={
          <span className="empty-data-text">More gratitudes needed...</span>
        }
        image={
          <span className="empty-data-image">
            <SmileIcon className="w-12 h-12" />
          </span>
        }
      />
    </div>
  );
};
