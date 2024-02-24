import Head from "next/head";

import { Footer } from "@/components/base/Footer/Footer";

import { Header } from "antd/lib/layout/layout";
import { MenuOutlined, SmileTwoTone } from "@ant-design/icons";
import { useStore } from "@/store/store";
import { CreateGratitudeModal } from "Components/feature/CreateGratitudeModal/CreateGratitudeModal";
import { useState } from "react";

export const Layout = ({ children }) => {
  const user = useStore((state) => state.user);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleOpenMenu = () => {
    if (user) {
      setIsCreateModalOpen(true);
    }
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
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
        <section className="main">{children}</section>
      </div>
      <CreateGratitudeModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
      />
      <Footer />
    </>
  );
};
