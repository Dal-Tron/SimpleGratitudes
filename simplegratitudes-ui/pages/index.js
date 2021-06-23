import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import dayjs from 'dayjs'
import { SmileTwoTone, PoweroffOutlined } from '@ant-design/icons'
import { Modal, Tabs, notification } from 'antd'

import SignIn from 'Components/SignIn'
import Register from 'Components/Register'
import { useAuth } from 'Context/auth'

const { TabPane } = Tabs;

export default function Home() {
  const getTime = () => dayjs().format('h:mm A MMMM D, YYYY');
  const [time, setTime] = useState(() => getTime());
  const [modalVisible, setModalVisible] = useState(false);
  const { user, signOut } = useAuth();

  console.log('user: ', user);

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

  const openModal = () => {
    setModalVisible(true);
  }

  const handleOkModal = () => {
    setModalVisible(false);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

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
        <div className='intention'>
          <div>Simple</div>
          <div>Gratitudes</div>
        </div>
        <div className='avatar'>
          <div>
            <span onClick={openModal}><SmileTwoTone twoToneColor='#73b8cb' /></span>
            {user && <span onClick={handleSignOut} style={{ marginLeft: 10 }}><PoweroffOutlined /></span>}
          </div>
        </div>
      </section>
      <section className="time">
        {time}
      </section>
      <section className="container">
        Hello
      </section>
      <Modal visible={modalVisible} onCancel={handleCloseModal} footer={null}>
        <Tabs animated={true}>
          <TabPane tab="Sign In" key="1">
            <SignIn closeModal={handleCloseModal} />
          </TabPane>
          <TabPane tab="Register" key="2">
            <Register closeModal={handleCloseModal} />
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  )
}
