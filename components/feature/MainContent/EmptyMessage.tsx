import { SmileTwoTone } from '@ant-design/icons';
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
            <SmileTwoTone twoToneColor="#73b8cb" />
          </span>
        }
      />
    </div>
  );
};
