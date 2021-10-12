import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { notification } from 'antd'

import AddGratitudeModal from 'Components/GratitudeModal/AddGratitudeModal'
import Loading from 'Components/Loading'
import Footer from 'Components/Footer'
import Header from 'Components/Header'
import SignModal from 'Components/SignModal'
import Time from 'Components/Time'

import { useAuthState, useAuthDispatch } from 'Context/auth'
import { useSignModal } from 'Context/modal'
import { useAddGratitudeModal } from 'Context/modal'

import { validJWT } from 'Helpers/validation'

import useScrolling from 'Hooks/scroll'

import AuthService from 'Services/auth'

export default function Layout({ children }) {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const { session } = useAuthState();
  const authDispatch = useAuthDispatch();
  const { showSignModal, updateSignModal } = useSignModal();
  const { showAddGratitudeModal, updateAddGratitudeModal, editableGratitude } = useAddGratitudeModal();
  const [loading, setLoading] = useState(false);
  const isScrolling = useScrolling();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router]);

  const handleCloseSignModal = () => updateSignModal(false);

  const handleCloseAddGratitudeModal = () => updateAddGratitudeModal(false);

  const handleCloseMenu = () => setMenuVisible(false);

  const handleShowMenu = () => {
    if (validJWT(session.access_token)) return setMenuVisible(true);

    return updateSignModal(true);
  }

  const handleSignOut = () => {
    notification.open({
      className: 'sign-out-notice-click',
      type: 'warning',
      message: 'Click me to sign out',
      duration: 2,
      key: 'sign-out-notification',
      onClick: () => {
        AuthService.signOut();
        setMenuVisible(false);
        notification.close('sign-out-notification');
        notification.open({
          type: 'success',
          message: 'Signed Out!',
          duration: 2,
        });
        authDispatch({
          type: 'set-session',
          session: {},
        });
        return router.push('/');
      },
    });
  }

  return (
    <>
      <div className='wrapper'>
        <Head>
          <title>Simple Gratitudes</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header
          handleCloseMenu={handleCloseMenu}
          handleShowMenu={handleShowMenu}
          handleSignOut={handleSignOut}
          isScrolling={isScrolling}
          menuVisible={menuVisible}
          sticky={true}
        />
        <Header
          handleCloseMenu={handleCloseMenu}
          handleShowMenu={handleShowMenu}
          handleSignOut={handleSignOut}
          isScrolling={isScrolling}
          menuVisible={menuVisible}
          sticky={false}
        />
        <Time />
        <section className="main">
          {loading ? <Loading /> : children}
        </section>
      </div>
      <Footer />
      <SignModal visible={showSignModal} onCancel={handleCloseSignModal} />
      <AddGratitudeModal
        visible={showAddGratitudeModal}
        onCancel={handleCloseAddGratitudeModal}
        editableGratitude={editableGratitude}
      />
    </>
  )
}