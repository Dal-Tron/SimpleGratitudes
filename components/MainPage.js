import React, { useEffect, useState, useMemo } from 'react'
import { notification, Empty } from 'antd'
import dayjs from 'dayjs'
import { SmileTwoTone } from '@ant-design/icons'
import { useRouter } from 'next/router'

import { supabase } from 'Supabase/client'

import Gratitude from 'Components/Gratitude'
import AddGratitudeButton from 'Components/GratitudeModal/AddGratitudeButton'
import { useSignModal, useAddGratitudeModal } from 'Context/modal'
import { useAuthState } from 'Context/auth'
import { useDataRender } from 'Context/data'

import Loading from 'Components/Loading'

import { validJWT } from 'Helpers/validation'

const queryString = require('query-string');

export default function MainPage({ mainPage = true }) {
  const [loading, setLoading] = useState(true);
  const [gratitudes, setGratitudes] = useState([]);

  const router = useRouter();
  const { page, access_restricted } = router.query;
  const { asPath, route } = router;

  const { user, session, profile: { username } } = useAuthState();
  const { updateSignModal } = useSignModal();
  const { dataRef } = useDataRender();
  const { updateAddGratitudeModal } = useAddGratitudeModal();

  // for password reset
  if (asPath.indexOf('type=recovery') !== -1) {
    const queryStr = asPath.split('#');
    const { access_token } = queryString.parse(queryStr[1]);
    if (validJWT(access_token)) {
      router.push({
        pathname: '/settings',
        query: { access_token },
      });
    }
  }

  // handle error
  const handleError = (error) => {
    if (error.message === 'JWT expired') {
      notification.open({
        onClick: () => updateSignModal(true),
        type: 'info',
        message: 'Your secure session has expired. Click here to sign in.',
        duration: 0,
      });
    }
  }

  useEffect(() => {
    if (access_restricted) {
      // clear out the restricted_access query
      if (window) window.history.replaceState(null, '', '/');
      return updateSignModal(true);
    }
  }, []);

  const fetchPrivateData = async () => {
    if (user?.id) {
      const { data: privatePageData, error: privatePageError } = await supabase.from('gratitudes').select('*').eq('user_id', user.id);

      if (privatePageError) return handleError(privatePageError);

      setGratitudes(privatePageData || []);
    }
    return setLoading(false);
  }

  const fetchPublicUserData = async () => {
    // Only public user's gratitudes
    const { data: publicPageData, error: publicPageError } = await supabase.from('gratitudes').select('*').eq('username', page).filter('public', 'eq', true);

    if (publicPageError) {
      return handleError(publicPageError);
    }

    setLoading(false);
    return setGratitudes(publicPageData || []);
  }

  const fetchFeaturedGratitudes = async () => {
    // All frontpage gratitudes
    const { data: frontPageData, error: frontpageError } = await supabase
      .from('gratitudes')
      .select('*')
      .eq('approved', true)
      .eq('public', true);

    if (frontpageError) {
      return handleError(frontpageError);
    }

    setLoading(false);
    return setGratitudes(frontPageData || []);
  }

  useEffect(() => {
    if (validJWT(session.access_token) && username && username === page) {
      return fetchPrivateData();
    }

    if (page) {
      return fetchPublicUserData();
    }

    if (route === '/') {
      return fetchFeaturedGratitudes();
    }

  }, [session.access_token, username, dataRef, page]);

  const handleAddGratitude = () => {
    if (!user) {
      return updateSignModal(true);
    }

    return updateAddGratitudeModal(true);
  }

  const renderGratitudes = () => {
    if (gratitudes && gratitudes.length > 0) {
      gratitudes.sort((a, b) => {
        return dayjs(b.inserted_at) - dayjs(a.inserted_at);
      });

      return gratitudes.map(({
        gratitude,
        id,
        inserted_at,
        public: publicGratitude,
        user_id,
        username: gratitudeUsername,
        approved,
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
            approved={approved}
            showPublic={!mainPage}
          />
        ));
    } else {
      if (loading) {
        return (
          <Loading />
        )
      }

      return (
        <div className='empty-data'>
          <Empty description={
            <span className='empty-data-text'>
              More gratitudes needed...
            </span>}
            image={<span className='empty-data-image'>
              <SmileTwoTone twoToneColor='#73b8cb' />
            </span>}
          />
        </div>
      )
    }
  }

  return (
    <section className="main-container">
      {!mainPage && username === page && <AddGratitudeButton onClick={handleAddGratitude} />}
      {renderGratitudes()}
    </section>
  )
}
