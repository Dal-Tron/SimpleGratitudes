import { Drawer } from 'antd';

import { MainMenu } from './MainMenu';

export const MenuDrawer = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <Drawer
      className="menu-drawer"
      title=""
      placement="right"
      closable={false}
      onClose={onClose}
      open={isOpen}
    >
      <MainMenu visible={isOpen} onClose={onClose} />
    </Drawer>
  );
};
