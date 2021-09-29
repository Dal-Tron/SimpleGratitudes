import {
  PoweroffOutlined,
  SettingOutlined,
  UserOutlined,
  SmileOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/router'

import { useAuthState } from 'Context/auth'
import { useAddGratitudeModal } from 'Context/modal'

const MainMenu = ({
  closeMenu = () => { },
  signOut = () => { },
  visible = false,
}) => {
  const router = useRouter();
  const { profile: { username } } = useAuthState();
  const { updateAddGratitudeModal } = useAddGratitudeModal();

  const handleClick = (link) => {
    switch (link) {
      case 'home': router.push('/'); break;
      case 'settings': router.push('/settings'); break;
      case 'share': updateAddGratitudeModal(true); break;
      case 'signout': signOut(); break;
      case 'username': router.push(`/${username}`); break;
      default: break;
    }

    closeMenu();
  }

  return (
    <div className={`sg-menu-item-container ${visible ? 'sg-menu-item-container-open' : ''}`}>
      <span onClick={() => handleClick('username')} className='sg-menu-item'>
        <div className='sg-menu-item-text'>{username || 'Gratitudes'}</div>
        <div className='sg-menu-item-icon'><UserOutlined /></div>
      </span>
      <span onClick={() => handleClick('share')} className='sg-menu-item'>
        <div className='sg-menu-item-text'>Share</div>
        <div className='sg-menu-item-icon'><SmileOutlined /></div>
      </span>
      <span onClick={() => handleClick('home')} className='sg-menu-item'>
        <div className='sg-menu-item-text'>Featured</div>
        <div className='sg-menu-item-icon'><StarOutlined /></div>
      </span>
      <span onClick={() => handleClick('settings')} className='sg-menu-item'>
        <div className='sg-menu-item-text'>Settings</div>
        <div className='sg-menu-item-icon'><SettingOutlined /></div>
      </span>
      <span onClick={() => handleClick('signout')} className='sg-menu-item'>
        <div className='sg-menu-item-text'>Sign Out</div>
        <div className='sg-menu-item-icon'><PoweroffOutlined /></div>
      </span>
    </div>
  );
}

export default MainMenu;