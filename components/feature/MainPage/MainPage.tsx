'use client';

import { SmileTwoTone } from '@ant-design/icons';
import { Empty, notification } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { supabase } from 'Supabase/client';

import Gratitude from 'Components/Gratitude';
import { useDataRender } from 'Context/data';
import { useAddGratitudeModal, useSignModal } from 'Context/modal';

import Loading from 'Components/Loading';

import { validJWT } from 'Helpers/validation';

import { useStore } from '@/store/store';
import { CreateGratitudeModal } from '../CreateGratitudeModal/CreateGratitudeModal';

import { SignModal } from '@/components/feature/SignModal/SignModal';
import { AddGratitudeButton } from '../GratitudeModal/AddGratitudeButton';

const queryString = require('query-string');

export default function MainPage({ mainPage = true }) {
  const [loading, setLoading] = useState(true);
  const [gratitudes, setGratitudes] = useState([]);

  const router = useRouter();
  const { page, access_restricted } = router.query;
  const { asPath, route } = router;

  const user = useStore((state) => state.user);

  const username = '';

  const { updateSignModal, showSignModal } = useSignModal();
  const { dataRef } = useDataRender();
  const { updateAddGratitudeModal, showAddGratitudeModal } =
    useAddGratitudeModal();

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
  };

  useEffect(() => {
    if (access_restricted) {
      // clear out the restricted_access query
      if (window) window.history.replaceState(null, '', '/');
      return updateSignModal(true);
    }
  }, []);

  const fetchPrivateData = async () => {
    if (user?.id) {
      const { data: privatePageData, error: privatePageError } = await supabase
        .from('gratitudes')
        .select('*')
        .eq('user_id', user.id);

      if (privatePageError) return handleError(privatePageError);

      setGratitudes(privatePageData || []);
    }
    return setLoading(false);
  };

  const fetchPublicUserData = async () => {
    // Only public user's gratitudes
    const { data: publicPageData, error: publicPageError } = await supabase
      .from('gratitudes')
      .select('*')
      .eq('username', page)
      .filter('public', 'eq', true);

    if (publicPageError) {
      return handleError(publicPageError);
    }

    setLoading(false);
    return setGratitudes(publicPageData || []);
  };

  const fetchFeaturedGratitudes = async () => {
    try {
      // All frontpage gratitudes
      const { data: frontPageData, error: frontpageError } = await supabase
        .from('gratitudes')
        .select('*')
        .eq('approved', true)
        .eq('public', true);

      if (frontpageError) {
        return handleError(frontpageError);
      }

      setGratitudes(frontPageData || []);
    } catch (err) {
      console.log('Error fetching featured gratitudes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username && username === page) {
      fetchPrivateData();
    }

    if (page) {
      fetchPublicUserData();
    }

    if (route === '/') {
      fetchFeaturedGratitudes();
    }
  }, [username, dataRef, page]);

  const handleAddGratitude = () => {
    if (!user) {
      return updateSignModal(true);
    }

    return updateAddGratitudeModal(true);
  };

  const handleSignCancel = () => {
    updateSignModal(false);
  };

  const handleAddClose = () => {
    updateAddGratitudeModal(false);
  };

  const renderGratitudes = () => {
    if (gratitudes && gratitudes.length > 0) {
      gratitudes.sort((a, b) => {
        return dayjs(b.inserted_at) - dayjs(a.inserted_at);
      });

      return gratitudes.map(
        ({
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
        )
      );
    } else {
      if (loading) {
        return <Loading />;
      }

      return (
        <div className="empty-data">
          <Empty
            description={
              <span className="empty-data-text">More gratitudes needed...</span>
            }
            image={
              <span className="empty-data-image">
                <SmileTwoTone twoToneColor="#73b8cb" />
              </span>
            }
          />
        </div>
      );
    }
  };

  return (
    <section className="main-container">
      <AddGratitudeButton onClick={handleAddGratitude} />
      {renderGratitudes()}
      <SignModal visible={showSignModal} onCancel={handleSignCancel} />
      <CreateGratitudeModal
        isOpen={showAddGratitudeModal}
        onClose={handleAddClose}
      />
    </section>
  );
}
