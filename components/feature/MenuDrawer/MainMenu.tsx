import {
  PoweroffOutlined,
  SettingOutlined,
  SmileOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

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

  const handleSignOut = () => {
    signOut();
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
      <MenuItem
        icon={UserOutlined}
        label="My Gratitudes"
        isActive={router.route === '/[page]'}
        onClick={handleMyGratitudes}
      />
      <MenuItem
        icon={StarOutlined}
        label="Featured"
        isActive={router.route === '/'}
        onClick={handleFeatured}
      />
      <MenuItem
        icon={SettingOutlined}
        label="Settings"
        isActive={router.route === '/settings'}
        onClick={handleSettings}
      />
      <MenuItem
        icon={PoweroffOutlined}
        label="Sign Out"
        isActive={false}
        onClick={handleSignOut}
      />
    </div>
  );
};
