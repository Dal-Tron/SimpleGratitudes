import React, { useEffect, useState } from 'react'
import { Modal, Tabs, notification, Button, Switch, Input, Spin, Empty } from 'antd'
import Head from 'next/head'
import dayjs from 'dayjs'
import { HomeOutlined, SmileTwoTone, PoweroffOutlined, PlusCircleOutlined, UserOutlined, CopyrightOutlined, CheckCircleFilled } from '@ant-design/icons'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { supabase } from 'Supabase/client'
import { useAuth } from 'Context/auth'

import SignIn from 'Components/SignIn'
import Register from 'Components/Register'
import Gratitude from 'Components/Gratitude'

const { TabPane } = Tabs;
const { TextArea } = Input;

export default function MainPage({ pageType = 'main' }) {
  const getTime = () => dayjs().format('h:mm A MMMM D, YYYY');
  const [time, setTime] = useState(() => getTime());
  const [animateGratitudeButton, setAnimateGratitudeButton] = useState(false);
  const [addGratitudeModalVisible, setAddGratitudeModalVisible] = useState(false);
  const [tag, setTag] = useState('');
  const [loading, setLoading] = useState(false);
  const [newGratitudeText, setNewGratitudeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newGratitudePublic, setNewGratitudePublic] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();
  const windowWidth = window.innerWidth;

  const [gratitudes, setGratitudes] = useState([]);
  const { page } = router.query;

  useEffect(() => {
    setTag(page);

    const fetchData = async () => {
      setLoading(true);
      const equateKey = pageType === 'main' ? 'approved' : 'username';
      const equateValue = pageType === 'main' ? true : page;
      const { data, error } = await supabase.from('gratitudes').select('*').eq(equateKey, equateValue);

      if (error) {
        console.log('fetching gratitudes error: ', error.message);
      }

      setLoading(false);
      setGratitudes(data);
    }

    fetchData();
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
    const re = /[0-9A-Za-z\! \.\'\,\:]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  const handleNewGratitudeText = (e) => {
    setNewGratitudeText(e.currentTarget.value);
  }

  const handleSubmitGratitude = async () => {
    if (user && user.user_metadata && user.user_metadata.username) {
      const { data, error } = await supabase.from('gratitudes').insert([
        {
          gratitude: newGratitudeText,
          user_id: user.id,
          username: user.user_metadata.username,
          public: newGratitudePublic,
          tags: tag || ''
        }
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

        if (newGratitudePublic) {
          notification.open({
            type: 'success',
            message: 'Also submitted for public approval!'
          });
        }

        setAddGratitudeModalVisible(false);
        setNewGratitudeText('');
        router.reload();
      }
    }
  }

  const handleTagChange = (e) => {
    e.preventDefault();
    setTag(e.currentTarget.value);
  }

  const handleTagInputPress = (e) => {
    const re = /[0-9A-Za-z\! \.\'\,\:]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
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

  const renderSubmitButton = () => {
    if (windowWidth > 500) {
      return (
        <span className='new-gratitude-button'>
          <Button onClick={handleSubmitGratitude} type='primary'>
            Submit
        </Button>
        </span>
      )
    }

    return <span className='new-gratitude-button-mobile' onClick={handleSubmitGratitude}><CheckCircleFilled /></span>;
  }

  const renderAddGratitudeModalFooter = () => {
    return (
      <div className='new-gratitude-action-buttons'>
        <span className='new-gratitude-switch-container'>
          <span className='new-gratitude-tags'>
            <Input value={tag} className='new-gratitude-tag' placeholder='Tag' onChange={handleTagChange} onKeyPress={handleTagInputPress} />
          </span>
          <span className={`new-gratitude-switch-option ${!newGratitudePublic && 'new-gratitude-switch-option-active'}`}>Private</span>
          <span className='new-gratitude-switch'>
            <Switch checked={newGratitudePublic} onChange={handleNewGratitudeSwitchChange} /></span>
          <span className={`new-gratitude-switch-option ${newGratitudePublic && 'new-gratitude-switch-option-active'}`}>Public</span>
        </span>
        {renderSubmitButton()}
      </div>
    )
  }

  const renderAddGratitudeButton = () => {
    const addButton = windowWidth > 500 ? (
      <div className='gratitude gratitude-button' onClick={() => handleAddGratitude()}>
        <div className={`gratitude-container ${animateGratitudeButton ? 'gratitude-button-pressed' : ''}`}>
          <span className='gratitude-text'>
            <PlusCircleOutlined style={{ fontSize: 40 }} />
          </span>
        </div>
      </div>
    ) : null;

    if (pageType === 'main' || page === 'fairycreek') {
      return addButton;
    } else {
      if (page === user?.user_metadata?.username) {
        return addButton;
      }
    }

    return null;
  }

  const renderAddGratitudeButtonMobile = () => {
    const addButton = windowWidth < 500 ? (
      <div className='gratitude-button-mobile' onClick={() => handleAddGratitude()}>
        <div className={`gratitude-container-mobile ${animateGratitudeButton ? 'gratitude-button-pressed-mobile' : ''}`}>
          <PlusCircleOutlined style={{ fontSize: 40 }} />
        </div>
      </div>
    ) : null;

    if (pageType === 'main' || page === 'fairycreek') {
      return addButton;
    } else {
      if (page === user?.user_metadata?.username) {
        return addButton;
      }
    }

    return null;
  }

  const renderAvatarButtons = () => {
    if (pageType === 'main') {
      return (
        <div>
          {!user && <span onClick={openModal}><UserOutlined /></span>}
          {user && <span onClick={() => router.push(`/${user?.user_metadata?.username}`)}><SmileTwoTone twoToneColor='#73b8cb' /></span>}
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
          {renderAddGratitudeButtonMobile()}
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
          {!loading ? renderGratitudes() : <div className='loader'><Spin size='large' /></div>}
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
            <span className='new-gratitude-from'>Shared by {user?.user_metadata?.username}</span>
            <span className='new-gratitude-date'>{dayjs().format('MMMM D, YYYY')}</span>
          </div>
        </Modal>
      </div>
      <div className='main-footer'>
        <div className='main-footer-copyright-container'>
          <div className='main-footer-copyright-text'>
            <Image
              src='https://hedciaofaszacfhqwvky.supabase.co/storage/v1/object/public/simplegratitudes/Logo-white.png'
              alt='Herman & Dob Inc'
              width={122}
              height={30}
            />
            <span style={{ marginLeft: 7, marginRight: 4 }}><CopyrightOutlined /></span>
            <div>{dayjs().format('YYYY')}</div>
            <div className='donate-button-container'>
              <form className='donate-button' action="https://www.paypal.com/donate" method="post" target="_blank">
                <input type="hidden" name="hosted_button_id" value="CC69U2F87CN72" />
                <input type="image" src="https://hedciaofaszacfhqwvky.supabase.co/storage/v1/object/public/simplegratitudes/support-1.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
