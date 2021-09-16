import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Drawer, notification } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import Title from 'Components/Title'
import Footer from 'Components/Footer'
import Time from 'Components/Time'
import MainMenu from 'Components/MainMenu'
import SignModal from 'Components/SignModal'
import AddGratitudeButtonMobile from 'Components/GratitudeModal/AddGratitudeButtonMobile'
import AddGratitudeModal from 'Components/GratitudeModal/AddGratitudeModal'

import { useAuth } from 'Context/auth'
import { useSignModal } from 'Context/modal'
import { useAddGratitudeModal } from 'Context/modal'

import { validJWT } from 'Helpers/validation'

import AuthService from 'Services/auth'

export default function Layout({ children }) {
  const router = useRouter();
  const { page } = router.query;

  const [menuVisible, setMenuVisible] = useState(false);
  const { session, updateSession } = useAuth();
  const { showSignModal, updateSignModal } = useSignModal();
  const { showAddGratitudeModal, updateAddGratitudeModal, editableGratitude } = useAddGratitudeModal();

  const handleCloseSignModal = () => updateSignModal(false);
  const handleCloseAddGratitudeModal = () => updateAddGratitudeModal(false);

  const handleShowMenu = () => {
    if (validJWT(session.access_token)) {
      return setMenuVisible(true);
    }

    return updateSignModal(true);
  }

  const handleCloseMenu = () => {
    return setMenuVisible(false);
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
        updateSession({});
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
        <section className='headspace'>
          <AddGratitudeButtonMobile onClick={() => updateAddGratitudeModal(true)} />
          <Title page={page} />
          <div className='sg-menu'>
            <span onClick={handleShowMenu}>
              <MenuOutlined className='menu-btn' />
            </span>
            <Drawer
              className="menu-drawer"
              title=""
              placement="right"
              closable={false}
              onClose={handleCloseMenu}
              visible={menuVisible}
            >
              <MainMenu
                visible={menuVisible}
                signOut={handleSignOut}
                closeMenu={() => setMenuVisible(false)}
              />
            </Drawer>
          </div>
        </section>
        <Time />
        <section className="main">{children}</section>
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