import clsx from 'clsx';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { GratitudeProps } from './Types';

export const Gratitude: FC<GratitudeProps> = ({ className, gratitude }) => {
  return (
    <div className={clsx('p-8 max-w-[350px] min-w-[250px]', className)}>
      <div
        className={clsx(
          'bg-primary-0 p-4 rounded-[20px] flex flex-col min-w-[100px] gratitude-container-shadow',
        )}
      >
        <span className="text-white text-center mt-[-5px] p-2">
          {gratitude.gratitude}
        </span>
        <ShareInfo username={gratitude?.profiles?.username} />
        <GratitudeDate date={gratitude.inserted_at} />
      </div>
    </div>
  );
};

const ShareInfo = ({ username }: { username: string }) => {
  const router = useRouter();

  const handleUsernameClick = () => {
    router.push(`/${username}`);
  };

  return (
    <span
      onClick={handleUsernameClick}
      className="text-right cursor-pointer text-primary-1"
    >
      Shared by {username}
    </span>
  );
};

const GratitudeDate = ({ date }: { date: string }) => {
  return (
    <span className="text-right text-primary-2">
      {dayjs(date).format('MMMM D, YYYY')}
    </span>
  );
};
