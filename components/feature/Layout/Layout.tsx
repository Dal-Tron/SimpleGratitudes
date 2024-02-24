import Head from 'next/head';

import { Footer } from '@/components/base/Footer/Footer';

import { SignModal } from '@/components/feature/SignModal/SignModal';
import { useStore } from '@/store/store';
import { MenuOutlined, SmileTwoTone } from '@ant-design/icons';
import { CreateGratitudeModal } from 'Components/feature/CreateGratitudeModal/CreateGratitudeModal';
import { MenuDrawer } from 'Components/feature/MenuDrawer/MenuDrawer';
import { useUserMenu } from 'Context/menu';
import { useAddGratitudeModal, useSignModal } from 'Context/modal';
import { Header } from 'antd/lib/layout/layout';

export const Layout = ({ children }) => {
  const user = useStore((state) => state.user);

  const { updateSignModal, showSignModal } = useSignModal();
  const { showAddGratitudeModal, updateAddGratitudeModal } =
    useAddGratitudeModal();
  const { showUserMenu, setShowUserMenu } = useUserMenu();

  const handleOpenMenu = () => {
    if (user) {
      setShowUserMenu(true);
    } else {
      updateSignModal(true);
    }
  };

  const handleCloseMenu = () => {
    setShowUserMenu(false);
  };

  const handleCloseCreateModal = () => {
    updateAddGratitudeModal(false);
  };

  const handleCloseSignModal = () => {
    updateSignModal(false);
  };

  return (
    <>
      <div className="wrapper">
        <Head>
          <title>Simple Gratitudes</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header className="flex flex-row items-center justify-between bg-primary-3 sg-header-shadow">
          <div className="text-3xl flex flex-row items-center h-full">
            <SmileTwoTone twoToneColor="#73b8cb" />
            <div className="text-lg text-white mx-2">Simple Gratitudes</div>
          </div>
          <div onClick={handleOpenMenu} className="text-3xl text-white">
            <MenuOutlined />
          </div>
        </Header>
        <MenuDrawer isOpen={showUserMenu} onClose={handleCloseMenu} />
        <section className="main">{children}</section>
      </div>
      <CreateGratitudeModal
        isOpen={showAddGratitudeModal}
        onClose={handleCloseCreateModal}
      />
      <SignModal visible={showSignModal} onCancel={handleCloseSignModal} />
      <Footer />
    </>
  );
};