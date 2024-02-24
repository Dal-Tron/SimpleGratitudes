import { SmileTwoTone } from '@ant-design/icons';
import { Empty } from 'antd';

export const EmptyMessage = () => {
  return (
    <div className="empty-data">
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
