import Head from 'next/head';

import { CreateGratitudeModal } from '@/components/feature/CreateGratitudeModal/CreateGratitudeModal';
import { Footer } from '@/components/feature/Footer/Footer';
import { Header } from '@/components/feature/Header/Header';
import { MenuDrawer } from '@/components/feature/MenuDrawer/MenuDrawer';
import { SignModal } from '@/components/feature/SignModal/SignModal';
import { useUserMenu } from '@/context/menu';
import { useAddGratitudeModal, useSignModal } from '@/context/modal';

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
      <div className="flex flex-col bg-[#5190a5] min-h-screen">
        <Head>
          <title>Simple Gratitudes</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
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
        <section className="flex-1 justify-center pt-8">{children}</section>
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
