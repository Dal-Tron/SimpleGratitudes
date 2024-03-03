'use client';

import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import Masonry from 'react-masonry-css';

import { AddGratitudeButton } from '@/components/feature/Gratitude/AddGratitudeButton';
import { Gratitude } from '@/components/feature/Gratitude/Gratitude';
import { useStore } from '@/store/store';
import { useAddGratitudeModal, useSignModal } from 'Context/modal';
import { validJWT } from 'Helpers/validation';
import { GratitudesService } from 'Services/gratitudes';

import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { mockGratitudes } from '@/mocks/gratitudes';
import { EmptyMessage } from './EmptyMessage';

export default function MainContent({ mainPage = true }) {
  const user = useStore((state) => state.user);

  const [loading, setLoading] = useState(true);
  const [gratitudes, setGratitudes] = useState([]);

  const router = useRouter();
  const { page, access_restricted } = router.query;
  const { asPath, route } = router;

  const profile = useStore((state) => state.profile);

  const { updateSignModal } = useSignModal();
  const { updateAddGratitudeModal } = useAddGratitudeModal();

  // for password reset
  if (asPath.indexOf('type=recovery') !== -1) {
    const queryStr = asPath.split('#');
    const { access_token } = queryString.parse(queryStr[1]);
    if (validJWT(access_token as string)) {
      router.push({
        pathname: '/settings',
        query: { access_token },
      });
    }
  }

  useEffect(() => {
    const fetchPrivateData = async () => {
      setLoading(true);
      const privateData = await GratitudesService.readPrivateData(user.id);
      setGratitudes(privateData);
      setLoading(false);
    };

    if (user?.id && profile && profile.username === page) {
      fetchPrivateData();
    }
  }, [user, profile, page]);

  useEffect(() => {
    const fetchPublicUserData = async () => {
      setLoading(true);
      const publicUserData = await GratitudesService.readPublicUserData(
        String(page),
      );
      setGratitudes(publicUserData);
      setLoading(false);
    };

    if (page && (!user || profile.username !== page)) {
      fetchPublicUserData();
    }
  }, [page, user, profile]);

  useEffect(() => {
    const fetchFeaturedGratitudes = async () => {
      setLoading(true);
      const featuredGratitudes =
        await GratitudesService.readFeaturedGratitudes();
      setGratitudes(featuredGratitudes);
      setLoading(false);
    };

    if (route === '/') {
      fetchFeaturedGratitudes();
    }
  }, [route]);

  useEffect(() => {
    if (access_restricted) {
      if (window) window.history.replaceState(null, '', '/');
      updateSignModal(true);
    }
  }, [access_restricted]);

  const handleAddGratitude = () => {
    if (!user) {
      return updateSignModal(true);
    }

    return updateAddGratitudeModal(true);
  };

  const memoedGratitudes = useMemo(
    () =>
      mockGratitudes
        .sort((a, b) => {
          const aInsertedAt = dayjs(a.inserted_at).valueOf();
          const bInsertedAt = dayjs(b.inserted_at).valueOf();

          return bInsertedAt - aInsertedAt;
        })
        .map(
          ({
            gratitude,
            id,
            inserted_at,
            public: publicGratitude,
            user_id,
            username: gratitudeUsername,
          }) => (
            <Gratitude
              date={inserted_at}
              gratitude={gratitude}
              id={id}
              key={id}
              mainPage={mainPage}
              publicGratitude={publicGratitude}
              userId={user_id}
              username={gratitudeUsername}
            />
          ),
        ),
    [gratitudes],
  );

  const breakpointColumnsObj = {
    default: 5,
    1650: 4,
    1250: 3,
    750: 2,
    500: 1,
  };

  return (
    <div className="flex justify-center w-full">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <AddGratitudeButton
          onClick={handleAddGratitude}
          className="mb-6 w-24"
        />
        {loading ? (
          <SpinLoading />
        ) : gratitudes.length < 1 ? (
          <EmptyMessage />
        ) : (
          memoedGratitudes
        )}
      </Masonry>
    </div>
  );
}
