import React, { useEffect, useState } from 'react'
import { Modal, Tabs, notification, Button, Switch, Input } from 'antd'
import Head from 'next/head'
import dayjs from 'dayjs'
import { HomeOutlined, SmileTwoTone, PoweroffOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

import { supabase } from 'Supabase/client'
import { useAuth } from 'Context/auth'

import SignIn from 'Components/SignIn'
import Register from 'Components/Register'
import Gratitude from 'Components/Gratitude'


const { TabPane } = Tabs;
const { TextArea } = Input;

export default function MainPage({ gratitudes = [], pageType = 'main' }) {
  const getTime = () => dayjs().format('h:mm A MMMM D, YYYY');
  const [time, setTime] = useState(() => getTime());
  const [animateGratitudeButton, setAnimateGratitudeButton] = useState(false);
  const [addGratitudeModalVisible, setAddGratitudeModalVisible] = useState(false);
  const [newGratitudeText, setNewGratitudeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newGratitudePublic, setNewGratitudePublic] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();

  const [userGratitudes, setUserGratitudes] = useState([]);
  const { page } = router.query;

  useEffect(() => {
    if (pageType === 'user') {
      const fetchData = async () => {
        const { data = [], error } = await supabase.from('gratitudes').select('*').eq('username', page);

        if (error) {
          console.log('fetching gratitudes error: ', error.message);
        }

        setUserGratitudes(data);
      }

      fetchData();
    }
  }, [page]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(() => getTime());
    }, 10000);

    return () => clearInterval(timer);
  });

  const handleSignOut = () => {
    notification.open({
      type: 'warning',
      message: 'Click me to sign out',
      onClick: () => {
        signOut();
        router.push('/');
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

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  const handleCloseAddGratitudeModal = () => {
    setNewGratitudeText('');
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

  const handleNewGratitudeSwitchChange = (checked) => {
    setNewGratitudePublic(checked);
  }

  const handleTextAreaKeyPress = (e) => {
    const re = /[0-9A-Za-z\! \.]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  const handleNewGratitudeText = (e) => {
    setNewGratitudeText(e.currentTarget.value);
  }

  const handleSubmitGratitude = async () => {
    if (user) {
      const { data, error } = await supabase.from('gratitudes').insert([
        { gratitude: newGratitudeText, user_id: user.id, username: user.user_metadata.username, public: newGratitudePublic }
      ]);

      if (error) {
        if (error.message === 'JWT expired') {
          return setModalVisible(true);
        }
        notification.open({
          type: 'error',
          message: 'Error: Failed to save gratitude.'
        });
      } else {
        notification.open({
          type: 'success',
          message: 'Successfully saved gratitude!'
        });
      }
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

  const renderAddGratitudeModalFooter = () => {
    return (
      <div className='new-gratitude-action-buttons'>
        <span className='new-gratitude-switch-container'>
          <span className={`new-gratitude-switch-option ${!newGratitudePublic && 'new-gratitude-switch-option-active'}`}>Private</span>
          <span className='new-gratitude-switch'>
            <Switch checked={newGratitudePublic} onChange={handleNewGratitudeSwitchChange} /></span>
          <span className={`new-gratitude-switch-option ${newGratitudePublic && 'new-gratitude-switch-option-active'}`}>Public</span>
        </span>
        <span className='new-gratitude-button'><Button onClick={handleSubmitGratitude} type='primary'>Submit</Button></span>
      </div>
    )
  }

  const renderAvatarButtons = () => {
    if (pageType === 'main') {
      return (
        <div>
          {!user && <span onClick={openModal}><UserOutlined /></span>}
          {user && <span onClick={() => router.push(`/${user.user_metadata.username}`)}><SmileTwoTone twoToneColor='#73b8cb' /></span>}
          {user && <span onClick={handleSignOut} style={{ marginLeft: 10 }}><PoweroffOutlined /></span>}
        </div>
      )
    }

    if (pageType === 'user') {
      return (
        <div>
          <span onClick={() => router.push('/')}><HomeOutlined /></span>
          {user && <span onClick={handleSignOut} style={{ marginLeft: 10 }}><PoweroffOutlined /></span>}
        </div>
      )
    }
  }

  const renderAddGratitudeButton = () => {
    const addButton = (
      <div className='gratitude gratitude-button' onClick={() => handleAddGratitude()}>
        <div className={`gratitude-container ${animateGratitudeButton && 'gratitude-button-pressed'}`}>
          <span className='gratitude-text'>
            <PlusCircleOutlined style={{ fontSize: 40 }} />
          </span>
        </div>
      </div>
    );

    if (pageType === 'main') {
      return addButton;
    } else {
      if (page === user?.user_metadata.username) {
        return addButton;
      }
    }

    return null;
  }

  const renderGratitudes = () => {
    if (pageType === 'main') {
      return gratitudes.map(({ id, gratitude, username, inserted_at }) => (
        <Gratitude
          key={id}
          gratitude={gratitude}
          username={username}
          date={inserted_at}
        />
      ))
    }

    if (pageType === 'user') {
      return userGratitudes.map(({ id, gratitude, username, inserted_at }) => (
        <Gratitude
          key={id}
          gratitude={gratitude}
          username={username}
          date={inserted_at}
        />
      ))
    }
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
        <div onClick={() => router.push('/')} className='intention'>
          <div>{pageType === 'main' ? 'Simple' : `${page}'s`}</div>
          <div>{pageType === 'main' ? 'Gratitudes' : 'gratitudes'}</div>
        </div>
        <div className='avatar'>
          {renderAvatarButtons()}
        </div>
      </section>
      <section className="time">
        {time}
      </section>
      <section className="container">
        {renderAddGratitudeButton()}
        {renderGratitudes()}
      </section>
      <Modal className="user-modal" visible={modalVisible} onCancel={handleCloseModal} footer={null}>
        {renderSignInTabs()}
      </Modal>
      <Modal className="add-gratitude-modal"
        visible={addGratitudeModalVisible}
        destroyOnClose={true}
        onCancel={handleCloseAddGratitudeModal}
        footer={renderAddGratitudeModalFooter()}
      >
        <div className='new-gratitude'>
          <TextArea
            maxLength={255}
            onChange={handleNewGratitudeText}
            value={newGratitudeText}
            className='new-gratitude-textarea'
            placeholder='My simple gratitude is...'
            onKeyPress={handleTextAreaKeyPress}
            autoSize={true}
          />
          <span className='new-gratitude-from'>Shared by {user?.user_metadata.username}</span>
          <span className='new-gratitude-date'>{dayjs().format('MMMM D, YYYY')}</span>
        </div>
      </Modal>
    </div>
  )
}
