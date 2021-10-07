import {
  PoweroffOutlined,
  SettingOutlined,
  UserOutlined,
  SmileOutlined,
  StarOutlined,
  DollarCircleOutlined,
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

  const submitPaypalForm = () => {
    if (document?.paypalForm?.onsubmit && !document?.paypalForm?.onsubmit()) return;

    document.paypalForm.submit();
  }

  const handleClick = (link) => {
    switch (link) {
      case 'home': router.push('/'); break;
      case 'settings': router.push('/settings'); break;
      case 'share': updateAddGratitudeModal(true); break;
      case 'signout': signOut(); break;
      case 'support': submitPaypalForm(); break;
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
      <span onClick={() => handleClick('support')} className='sg-menu-item'>
        <div className='sg-menu-item-text'>Support Us</div>
        <div className='sg-menu-item-icon'><DollarCircleOutlined /></div>
      </span>
      <div style={{ display: 'none' }}>
        <form name='paypalForm' className='donate-button' action="https://www.paypal.com/donate" method="post" target="_blank">
          <input type="hidden" name="hosted_button_id" value="CC69U2F87CN72" />
          <input type="image" src="https://hedciaofaszacfhqwvky.supabase.co/storage/v1/object/public/simplegratitudes/support-1.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  );
}

export default MainMenu;