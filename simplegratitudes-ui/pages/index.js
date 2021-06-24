import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import dayjs from 'dayjs'
import { SmileTwoTone, PoweroffOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Modal, Tabs, notification } from 'antd'
import { useRouter } from 'next/router'

import { supabase } from 'Supabase/client'

import SignIn from 'Components/SignIn'
import Register from 'Components/Register'
import Gratitude from 'Components/Gratitude'

import { useAuth } from 'Context/auth'

const { TabPane } = Tabs;

export async function getStaticProps(context) {
  const { data, error } = await supabase.from('gratitudes').select();

  if (error) {
    console.log('fetching gratitudes error: ', error.message);
  }

  return {
    props: {
      gratitudes: data || []
    }
  }
}

export default function Home({ gratitudes }) {
  const getTime = () => dayjs().format('h:mm A MMMM D, YYYY');
  const [time, setTime] = useState(() => getTime());
  const [animateGratitudeButton, setAnimateGratitudeButton] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [addGratitudeModalVisible, setAddGratitudeModalVisible] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(() => getTime());
    }, 10000);

    return () => clearInterval(timer);
  });

  const handleSignOut = () => {
    notification.open({
      type: 'warning',
      message: 'Click to sign out',
      onClick: () => {
        signOut();
        notification.open({
          type: 'success',
          message: 'Signed Out!',
          duration: 2,
        })
      },
      duration: 2,
    })
  }

  const animateButton = () => {
    setAnimateGratitudeButton(true);

    setTimeout(() => {
      setAnimateGratitudeButton(false);
    }, 200);
  }

  const openModal = () => {
    setModalVisible(true);
  }

  const handleOkModal = () => {
    setModalVisible(false);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  const handleCloseAddGratitudeModal = () => {
    setAddGratitudeModalVisible(false);
  }

  const handleAddGratitude = () => {
    animateButton();

    if (user) {
      return setAddGratitudeModalVisible(true);
    } else {
      return openModal();
    }
  }

  const renderSignInTabs = () => {
    return (
      <Tabs animated={true}>
        <TabPane tab="Sign In" key="1">
          <SignIn closeModal={handleCloseModal} />
        </TabPane>
        <TabPane tab="Register" key="2">
          <Register closeModal={handleCloseModal} />
        </TabPane>
      </Tabs>
    )
  }

  // const renderUserTabs = () => {
  //   return <div></div>;
  // }

  return (
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
        <div onClick={() => router.push('/')} className='intention'>
          <div>Simple</div>
          <div>Gratitudes</div>
        </div>
        <div className='avatar'>
          <div>
            {!user && <span onClick={openModal}><UserOutlined /></span>}
            {user && <span onClick={() => router.push(`/${user.user_metadata.username}`)}><SmileTwoTone twoToneColor='#73b8cb' /></span>}
            {user && <span onClick={handleSignOut} style={{ marginLeft: 10 }}><PoweroffOutlined /></span>}
          </div>
        </div>
      </section>
      <section className="time">
        {time}
      </section>
      <section className="container">
        <div className='gratitude gratitude-button' onClick={() => handleAddGratitude()}>
          <div className={`gratitude-container ${animateGratitudeButton && 'gratitude-button-pressed'}`}>
            <span className='gratitude-text'>
              <PlusCircleOutlined style={{ fontSize: 40 }} />
            </span>
          </div>
        </div>
        {gratitudes.map(({ id, gratitude, username, inserted_at }) => (
          <Gratitude
            key={id}
            gratitude={gratitude}
            username={username}
            date={inserted_at}
          />
        ))}
      </section>
      <Modal className="user-modal" visible={modalVisible} onCancel={handleCloseModal} footer={null}>
        {renderSignInTabs()}
      </Modal>
      <Modal className="add-gratitude-modal" visible={addGratitudeModalVisible} onCancel={handleCloseAddGratitudeModal} footer={null}>
        Add
      </Modal>
    </div>
  )
}


