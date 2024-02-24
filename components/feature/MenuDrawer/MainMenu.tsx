import {
  DollarCircleOutlined,
  PoweroffOutlined,
  SettingOutlined,
  SmileOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { createRef } from 'react';

import { useStore } from '@/store/store';
import { useAddGratitudeModal } from 'Context/modal';
import clsx from 'clsx';
import { MenuItem } from './MenuItem';

export const MainMenu = ({
  onClose = () => {},
  signOut = () => {},
  visible = false,
}) => {
  const { updateAddGratitudeModal } = useAddGratitudeModal();
  const profile = useStore((state) => state.profile);
  const router = useRouter();
  const paypalFormRef = createRef();

  const submitPaypalForm = () => {
    return paypalFormRef.current.submit();
  };

  const handleMyGratitudes = () => {
    router.push(`/${profile?.username}`);
    onClose();
  };

  const handleShare = () => {
    updateAddGratitudeModal(true);
    onClose();
  };

  const handleFeatured = () => {
    router.push('/');
    onClose();
  };

  const handleSettings = () => {
    router.push('/settings');
    onClose();
  };

  const handleClick = (link) => {
    switch (link) {
      case 'signout':
        signOut();
        break;
      case 'support':
        submitPaypalForm();
        break;
      default:
        break;
    }

    onClose();
  };

  return (
    <div
      className={clsx('sg-menu-item-container', {
        'sg-menu-item-container-open': visible,
      })}
    >
      <MenuItem
        icon={SmileOutlined}
        label="Share"
        isActive={false}
        onClick={handleShare}
      />
      <span onClick={handleMyGratitudes} className="sg-menu-item">
        <div className="sg-menu-item-text">My Gratitudes</div>
        <div
          className={clsx('sg-menu-item-icon', {
            'sg-menu-item-icon-selected': router.route === '/[page]',
          })}
        >
          <UserOutlined />
        </div>
      </span>
      <span onClick={handleFeatured} className="sg-menu-item">
        <div className="sg-menu-item-text">Featured</div>
        <div
          className={clsx('sg-menu-item-icon', {
            'sg-menu-item-icon-selected': router.route === '/',
          })}
        >
          <StarOutlined />
        </div>
      </span>
      <span onClick={handleSettings} className="sg-menu-item">
        <div className="sg-menu-item-text">Settings</div>
        <div
          className={clsx('sg-menu-item-icon', {
            'sg-menu-item-icon-selected': router.route === '/settings',
          })}
        >
          <SettingOutlined />
        </div>
      </span>
      <span onClick={() => handleClick('signout')} className="sg-menu-item">
        <div className="sg-menu-item-text">Sign Out</div>
        <div className="sg-menu-item-icon">
          <PoweroffOutlined />
        </div>
      </span>
      <span onClick={() => handleClick('support')} className="sg-menu-item">
        <div className="sg-menu-item-text">Support Us</div>
        <div className="sg-menu-item-icon">
          <DollarCircleOutlined />
        </div>
      </span>
      <div style={{ display: 'none' }}>
        <form
          ref={paypalFormRef}
          name="paypalForm"
          className="donate-button"
          action="https://www.paypal.com/donate"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="hosted_button_id" value="CC69U2F87CN72" />
          <input
            type="image"
            src="https://hedciaofaszacfhqwvky.supabase.co/storage/v1/object/public/simplegratitudes/support-1.png"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            src="https://www.paypal.com/en_CA/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </div>
  );
};
