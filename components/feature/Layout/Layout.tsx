import Head from 'next/head';

import { Footer } from '@/components/feature/Footer/Footer';
import { Header } from '@/components/feature/Header/Header';
import { SignModal } from '@/components/feature/SignModal/SignModal';
import { CreateGratitudeModal } from 'Components/feature/CreateGratitudeModal/CreateGratitudeModal';
import { MenuDrawer } from 'Components/feature/MenuDrawer/MenuDrawer';
import { useUserMenu } from 'Context/menu';
import { useAddGratitudeModal, useSignModal } from 'Context/modal';

export const Layout = ({ children }) => {
  const { updateSignModal, showSignModal } = useSignModal();
  const { showAddGratitudeModal, updateAddGratitudeModal } =
    useAddGratitudeModal();
  const { showUserMenu, setShowUserMenu } = useUserMenu();

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
      <div className="flex flex-col bg-[#5190a5]">
        <Head>
          <title>Simple Gratitudes</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Simple Gratitudes helps you record and save your daily gratitudes, fostering a positive mindset and emotional well-being."
          />
          <meta
            name="keywords"
            content="gratitudes, gratitude journal, well-being, positivity, mental health, self-care, feeling better"
          />
        </Head>
        <Header />
        <MenuDrawer isOpen={showUserMenu} onClose={handleCloseMenu} />
        <section className="flex justify-center pt-8 h-screen">
          {children}
        </section>
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
