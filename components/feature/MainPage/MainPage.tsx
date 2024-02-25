'use client';

import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';

import { AddGratitudeButton } from '@/components/feature/GratitudeModal/AddGratitudeButton';
import { useStore } from '@/store/store';
import Gratitude from 'Components/Gratitude';
import Loading from 'Components/Loading';
import { useAddGratitudeModal, useSignModal } from 'Context/modal';
import { validJWT } from 'Helpers/validation';
import { GratitudesService } from 'Services/gratitudes';

import { EmptyMessage } from './EmptyMessage';

export default function MainPage({ mainPage = true }) {
  const [loading, setLoading] = useState(true);
  const [gratitudes, setGratitudes] = useState([]);

  const router = useRouter();
  const { page, access_restricted } = router.query;
  const { asPath, route } = router;

  const user = useStore((state) => state.user);
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
      gratitudes
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

  return (
    <section className="main-container">
      <AddGratitudeButton onClick={handleAddGratitude} />
      {loading && <Loading />}
      {!loading && gratitudes.length < 1 && <EmptyMessage />}
      {!loading && gratitudes.length > 0 && memoedGratitudes}
    </section>
  );
}
