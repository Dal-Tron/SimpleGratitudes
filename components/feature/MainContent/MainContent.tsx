'use client';

import dayjs from 'dayjs';
import { useMemo } from 'react';
import Masonry from 'react-masonry-css';

import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { Gratitude } from '@/components/feature/Gratitude/Gratitude';
import { TGratitude } from '@/types/gratitude';
import { EmptyMessage } from './EmptyMessage';

export const MainContent = ({
  gratitudes = [],
  loading,
}: {
  gratitudes: TGratitude[];
  loading: boolean;
}) => {
  const memoedGratitudes = useMemo(
    () =>
      gratitudes
        .sort(
          (a, b) =>
            dayjs(b.inserted_at).valueOf() - dayjs(a.inserted_at).valueOf(),
        )
        .map((gratitude) => (
          <Gratitude key={gratitude.id} gratitude={gratitude} />
        )),
    [gratitudes],
  );

  const breakpointColumnsObj = { default: 5, 1650: 4, 1250: 3, 750: 2, 500: 1 };

  return (
    <div className="flex justify-center w-full">
      {loading ? (
        <SpinLoading className="text-5xl" />
      ) : gratitudes.length ? (
        <Masonry breakpointCols={breakpointColumnsObj} className="flex w-full">
          {memoedGratitudes}
        </Masonry>
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
};
