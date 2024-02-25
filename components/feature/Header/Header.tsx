import {
  MenuOutlined,
  PlusCircleOutlined,
  SmileTwoTone,
} from '@ant-design/icons';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { Title } from '@/components/feature/Title/Title';
import { useUserMenu } from '@/context/menu';
import { useAddGratitudeModal, useSignModal } from '@/context/modal';
import { useStore } from '@/store/store';

export const Header = ({
  sticky = false,
  isScrolling = false,
  className,
}: {
  sticky?: boolean;
  isScrolling?: boolean;
  className?: string;
}) => {
  const user = useStore((state) => state.user);
  const router = useRouter();
  const { updateAddGratitudeModal } = useAddGratitudeModal();
  const { setShowUserMenu } = useUserMenu();
  const { updateSignModal } = useSignModal();

  const handleOpenAddGratitudeModal = () => {
    if (user) {
      updateAddGratitudeModal(true);
    } else {
      updateSignModal(true);
    }
  };

  const handleOpenMenu = () => {
    if (user) {
      setShowUserMenu(true);
    } else {
      updateSignModal(true);
    }
  };

  const handleNavigateHome = () => {
    router.push('/');
  };

  return (
    <section
      className={clsx(className, {
        'headspace-wrapper': sticky,
        headspace: !sticky,
        'sticky-header': isScrolling && sticky,
      })}
    >
      <div className="flex flex-row border-b-8 border-[#73b8cb] p-6 items-center">
        <div
          onClick={handleOpenAddGratitudeModal}
          className="text-white text-3xl md:hidden"
        >
          <PlusCircleOutlined />
        </div>
        <div className="smiley-header" onClick={handleNavigateHome}>
          {sticky ? <SmileTwoTone twoToneColor="#73b8cb" /> : <Title />}
        </div>
        <div onClick={handleOpenMenu} className="text-3xl text-white">
          <MenuOutlined />
        </div>
      </div>
    </section>
  );
};
