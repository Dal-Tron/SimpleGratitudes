import { useStore } from '@/store/store';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useAddGratitudeModal } from 'Context/modal';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { GratitudeProps } from './Types';

export const Gratitude: FC<GratitudeProps> = ({
  className,
  date,
  gratitude,
  id,
  mainPage = false,
  publicGratitude,
  userId = '',
  username,
}) => {
  const user = useStore((state) => state.user);
  const [pressed, setPressed] = useState<boolean>(false);
  const router = useRouter();
  const { updateAddGratitudeModal, setEditableGratitude } =
    useAddGratitudeModal();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (pressed) {
      timer = setTimeout(() => setPressed(false), 200);
    }
    return () => clearTimeout(timer);
  }, [pressed]);

  const handleEditGratitude = () => {
    if (user?.id === userId) {
      setPressed(true);
      updateAddGratitudeModal(true);
      setEditableGratitude({ gratitude, date, id, public: publicGratitude });
    }
  };

  const ShareInfo: React.FC = () => {
    if (mainPage) {
      return (
        <span
          onClick={() => router.push(`/${username}`)}
          className="text-right cursor-pointer text-primary-1"
        >
          Shared by {username}
        </span>
      );
    } else if (userId === user?.id) {
      return (
        <span className="text-right cursor-pointer text-primary-2">
          {publicGratitude ? 'Public' : 'Private'}{' '}
          {publicGratitude ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </span>
      );
    }
    return null;
  };

  const GratitudeDate: React.FC = () => {
    return !mainPage ? (
      <span className="text-right text-primary-2">
        {dayjs(date).format('MMMM D, YYYY')}
      </span>
    ) : null;
  };

  return (
    <div
      onClick={handleEditGratitude}
      className={clsx(
        'p-8 max-w-[350px] min-w-[250px] transition-shadow transition-transform duration-300 ease-in-out',
        className,
      )}
    >
      <div
        className={clsx(
          'bg-primary-0 p-4 rounded-[20px] flex flex-col min-w-[100px]',
          pressed ? 'gratitude-pressed-shadow' : 'gratitude-container-shadow',
        )}
      >
        <span className="text-white text-center mt-[-5px] p-2">
          {gratitude}
        </span>
        <ShareInfo />
        <GratitudeDate />
      </div>
    </div>
  );
};
