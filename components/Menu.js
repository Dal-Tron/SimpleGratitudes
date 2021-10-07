
import { MenuOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'

import MainMenu from 'Components/MainMenu'

const Menu = ({
  handleShowMenu = () => { },
  handleCloseMenu = () => { },
  menuVisible = false,
  handleSignOut = () => { },
}) => {
  return (
    <div className='sg-menu'>
      <span onClick={handleShowMenu}>
        <MenuOutlined className='menu-btn' />
      </span>
      <Drawer
        className="menu-drawer"
        title=""
        placement="right"
        closable={false}
        onClose={handleCloseMenu}
        visible={menuVisible}
      >
        <MainMenu
          visible={menuVisible}
          signOut={handleSignOut}
          closeMenu={handleCloseMenu}
        />
      </Drawer>
    </div>
  )
}

export default Menu;