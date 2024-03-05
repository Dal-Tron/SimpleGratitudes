'use client';

import dayjs from 'dayjs';
import { useMemo } from 'react';
import Masonry from 'react-masonry-css';

import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { Gratitude } from '@/components/feature/Gratitude/Gratitude';
import { useStore } from '@/store/store';
import { EmptyMessage } from './EmptyMessage';

export const MainContent = ({ gratitudes = [], mainPage = true }) => {
  const user = useStore((state) => state.user);

  const memoedGratitudes = useMemo(
    () =>
      gratitudes
        .sort(
          (a, b) =>
            dayjs(b.inserted_at).valueOf() - dayjs(a.inserted_at).valueOf(),
        )
        .map((gratitude) => (
          <Gratitude
            {...gratitude}
            key={gratitude.id}
            mainPage={mainPage}
            isOwner={user?.id === gratitude?.user_id}
          />
        )),
    [gratitudes, mainPage],
  );

  const breakpointColumnsObj = { default: 5, 1650: 4, 1250: 3, 750: 2, 500: 1 };

  return (
    <div className="flex justify-center w-full">
      {!gratitudes.length ? (
        <SpinLoading className="text-5xl" />
      ) : gratitudes.length > 0 ? (
        <Masonry breakpointCols={breakpointColumnsObj} className="flex w-full">
          {memoedGratitudes}
        </Masonry>
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
};
