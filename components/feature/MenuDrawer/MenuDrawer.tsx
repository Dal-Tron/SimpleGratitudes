import MainMenu from "Components/MainMenu";
import { Drawer } from "antd";

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
      <MainMenu
        visible={menuVisible}
        signOut={handleSignOut}
        closeMenu={handleCloseMenu}
      />
    </Drawer>
  );
};
