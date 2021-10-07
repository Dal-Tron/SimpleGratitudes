import { useRouter } from 'next/router'
import { SmileTwoTone } from '@ant-design/icons'

import AddGratitudeButtonMobile from 'Components/GratitudeModal/AddGratitudeButtonMobile'
import Title from 'Components/Title'
import Menu from 'Components/Menu'

import { useAddGratitudeModal } from 'Context/modal'

const Header = ({
  sticky = false,
  isScrolling = false,
  handleShowMenu = () => { },
  handleCloseMenu = () => { },
  menuVisible = false,
  handleSignOut = () => { },
}) => {
  const router = useRouter();
  const { page } = router.query;
  const { updateAddGratitudeModal } = useAddGratitudeModal();

  return (
    <section className={`${sticky ? 'headspace-wrapper' : 'headspace'} ${isScrolling && sticky ? 'stickyHeader' : ''}`}>
      <div className='headspace-content'>
        <AddGratitudeButtonMobile onClick={() => updateAddGratitudeModal(true)} />
        {sticky ? (
          <div className='smiley-header'>
            <SmileTwoTone twoToneColor='#73b8cb' />
          </div>
        ) : <Title page={page} />}
        <Menu
          handleShowMenu={handleShowMenu}
          handleCloseMenu={handleCloseMenu}
          menuVisible={menuVisible}
          handleSignOut={handleSignOut}
        />
      </div>
    </section>
  )
}

export default Header;