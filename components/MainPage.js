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
import { useAddGratitudeModal } from 'Context/modal'

export default function MainPage() {
  const [loading, setLoading] = useState(false);
  const [gratitudes, setGratitudes] = useState([]);

  const router = useRouter();
  const { page } = router.query;

  const { user, username } = useAuth();
  const { updateSignModal } = useSignModal();
  const { updateAddGratitudeModal } = useAddGratitudeModal();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const equateKey = page ? 'username' : 'frontpage';
      const equateValue = page ? page : true;
      const { data, error } = await supabase.from('gratitudes').select('*').eq(equateKey, equateValue);

      if (error) {
        if (error.message === 'JWT expired') {
          notification.open({
            onClick: () => updateSignModal(true),
            type: 'info',
            message: 'Your secure session has expired. Click here to sign in.',
            duration: 0,
          });
        }
      }

      setLoading(false);
      setGratitudes(data || []);
    }

    const subscribe = async () => {
      const gratitudes = await supabase.from('gratitudes').on('UPDATE', payload => {
        console.log('Change received!', payload)
      }).subscribe();
    }

    const unsubscribe = () => {
      // handle unsub
    }

    subscribe();
    fetchData();

    return () => {
      unsubscribe();
    }
  }, [page]);

  const handleAddGratitude = () => {
    if (!user) {
      return updateSignModal(true);
    }

    return updateAddGratitudeModal(true);
  }

  const renderGratitudes = () => {
    let displayedGratitudes = [...gratitudes];

    if (page) {
      if (username !== page) {
        displayedGratitudes = gratitudes.filter(gratitude => {
          return gratitude.public;
        });
      }
    }

    if (displayedGratitudes && displayedGratitudes.length > 0) {
      displayedGratitudes.sort((a, b) => {
        return dayjs(b.inserted_at) - dayjs(a.inserted_at);
      });

      return displayedGratitudes.map(({ id, gratitude, username, inserted_at }) => (
        <Gratitude
          key={id}
          gratitude={gratitude}
          username={username}
          date={inserted_at}
        />
      ));
    } else {
      return (
        <div className='empty-data'>
          <Empty description={
            <span className='empty-data-text'>
              More gratitudes needed...
          </span>
          }
            image={<span className='empty-data-image'><SmileTwoTone twoToneColor='#73b8cb' /></span>}
          />
        </div>
      )
    }
  }

  return (
    <section className="main-container">
      <AddGratitudeButton onClick={handleAddGratitude} />
      {!loading ? renderGratitudes() : <div className='loader'>
        <Spin size='large' />
      </div>}
    </section>
  )
}
