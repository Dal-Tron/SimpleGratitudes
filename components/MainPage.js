import React, { useEffect, useState } from 'react'
import { notification, Spin, Empty } from 'antd'
import dayjs from 'dayjs'
import { SmileTwoTone } from '@ant-design/icons'
import { useRouter } from 'next/router'

import { supabase } from 'Supabase/client'

import Gratitude from 'Components/Gratitude'
import AddGratitudeButton from 'Components/AddGratitudeButton'
import { useSignModal } from 'Context/modal'
import { useAuth } from 'Context/auth'
import { useData } from 'Context/data'
import { useAddGratitudeModal } from 'Context/modal'

export default function MainPage() {
  const [loading, setLoading] = useState(true);
  const [gratitudes, setGratitudes] = useState([]);

  const router = useRouter();
  const { page } = router.query;
  const { pathname } = router;

  const { user, username } = useAuth();
  const { updateSignModal } = useSignModal();
  const { dataRef } = useData();
  const { updateAddGratitudeModal } = useAddGratitudeModal();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (pathname !== '/') {
        if (username && username === page) {
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

      return gratitudes.map(({ id, gratitude, username, inserted_at }) => (
        <Gratitude
          key={id}
          gratitude={gratitude}
          username={username}
          date={inserted_at}
        />
      ));
    } else {
      if (loading) {
        return (
          <div className='loader'>
            <Spin size='large' indicator={<SmileTwoTone twoToneColor='#73b8cb' spin={true} />} />
          </div>
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
