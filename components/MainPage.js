import React, { useEffect, useState } from 'react'
import { notification, Empty } from 'antd'
import dayjs from 'dayjs'
import { SmileTwoTone } from '@ant-design/icons'
import { useRouter } from 'next/router'

import { supabase } from 'Supabase/client'

import Gratitude from 'Components/Gratitude'
import AddGratitudeButton from 'Components/GratitudeModal/AddGratitudeButton'
import { useSignModal, useAddGratitudeModal } from 'Context/modal'
import { useAuth } from 'Context/auth'
import { useDataRender } from 'Context/data'
import { useProfile } from 'Context/profile'

import Loading from 'Components/Loading'

import { validJWT } from 'Helpers/validation'

const queryString = require('query-string');

export default function MainPage({ starred = true }) {
  const [loading, setLoading] = useState(true);
  const [gratitudes, setGratitudes] = useState([]);

  const router = useRouter();
  const { page } = router.query;
  const { pathname, asPath } = router;

  const { user, accessToken } = useAuth();
  const { updateSignModal } = useSignModal();
  const { dataRef } = useDataRender();
  const { updateAddGratitudeModal } = useAddGratitudeModal();
  const { username } = useProfile();

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

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (pathname !== '/') {
        if (validJWT(accessToken) && username && username === page) {
          // All user's gratitudes
          const { data: privatePageData, error: privatePageError } = await supabase.from('gratitudes').select('*').eq('username', page);

          if (privatePageError) {
            return handleError(privatePageError);
          }

          setLoading(false);
          return setGratitudes(privatePageData || []);
        } else {
          // Only public user's gratitudes
          const { data: publicPageData, error: publicPageError } = await supabase.from('gratitudes').select('*').eq('username', page).filter('public', 'eq', true);

          if (publicPageError) {
            return handleError(publicPageError);
          }

          setLoading(false);
          return setGratitudes(publicPageData || []);
        }
      } else {
        // All frontpage gratitudes
        const { data: frontPageData, error: frontpageError } = await supabase.from('gratitudes').select('*').eq('frontpage', true);

        if (frontpageError) {
          return handleError(frontpageError);
        }

        setLoading(false);
        return setGratitudes(frontPageData || []);
      }
    }

    return fetchData();
  }, [page, dataRef]);

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

      return gratitudes.map(({ id, gratitude, username: gratitudeUsername, inserted_at, public: publicGratitude }) => (
        <Gratitude
          date={inserted_at}
          gratitude={gratitude}
          id={id}
          key={id}
          username={gratitudeUsername}
          publicGratitude={publicGratitude}
          starred={starred}
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
      <AddGratitudeButton onClick={handleAddGratitude} />
      {renderGratitudes()}
    </section>
  )
}
