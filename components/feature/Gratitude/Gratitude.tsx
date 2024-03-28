import clsx from 'clsx';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { ClosedEyeIcon } from '@/icons/ClosedEye';
import { EyeIcon } from '@/icons/Eye';
import { TGratitude, TGratitudeWithProfile } from '@/types/gratitude';

export type GratitudeProps = {
  className?: string;
  gratitude: TGratitudeWithProfile;
  isFeatured?: boolean;
};

export const Gratitude: FC<GratitudeProps> = ({
  className,
  gratitude,
  isFeatured,
}) => {
  return (
    <div className={clsx('p-8 max-w-[350px] min-w-[270px]', className)}>
      <div
        className={clsx(
          'bg-primary-0 p-4 rounded-[20px] flex flex-col min-w-[100px] gratitude-container-shadow',
        )}
      >
        <span className="text-white text-center mt-[-5px] p-2">
          {gratitude?.gratitude}
        </span>
        <ShareInfo username={gratitude?.profiles?.username} />
        <div className="flex flex-row w-full">
          {!isFeatured && (
            <div className="flex justify-start">
              <GratitudeStatus gratitude={gratitude} />
            </div>
          )}
          <div className="ml-auto">
            <GratitudeDate date={gratitude.inserted_at} />
          </div>
        </div>
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

const GratitudeStatus: FC<{ gratitude: TGratitude }> = ({ gratitude }) => {
  const isPublic = gratitude?.public;

  return (
    <div className="flex items-center">
      {isPublic ? (
        <EyeIcon className="w-4 h-4 text-white" />
      ) : (
        <ClosedEyeIcon className="w-4 h-4 text-primary-2" />
      )}
      <span
        className={clsx('ml-2', {
          'text-primary-2': !isPublic,
          'text-white': isPublic,
        })}
      >
        {isPublic ? 'Public' : 'Private'}
      </span>
    </div>
  );
};
