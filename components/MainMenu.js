import { useRouter } from 'next/router'
import { UserOutlined, SettingOutlined, PoweroffOutlined } from '@ant-design/icons'

const MainMenu = ({
  visible = false,
  username = '',
  signOut = () => { }
}) => {
  const router = useRouter();

  return (
    <div className={`sg-menu-item-container ${visible ? 'sg-menu-item-container-open' : ''}`}>
      <span onClick={() => router.push(`/${username ?? ''}`)} className='sg-menu-item'>
        <div className='sg-menu-item-text'>{username ?? 'Gratitudes'}</div>
        <div className='sg-menu-item-icon'><UserOutlined /></div>
      </span>
      <span onClick={() => router.push('/settings')} className='sg-menu-item'>
        <div className='sg-menu-item-text'>Settings</div>
        <div className='sg-menu-item-icon'><SettingOutlined /></div>
      </span>
      <span onClick={signOut} className='sg-menu-item'>
        <div className='sg-menu-item-text'>Sign Out</div>
        <div className='sg-menu-item-icon'><PoweroffOutlined /></div>
      </span>
    </div>
  );
}

export default MainMenu;