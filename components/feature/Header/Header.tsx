import { MenuOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { Title } from '@/components/feature/Title/Title';
import { useUserMenu } from '@/context/menu';
import { useAddGratitudeModal, useSignModal } from '@/context/modal';
import { SmileIcon } from '@/icons/Smile';
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
      <div className="flex justify-center border-b-8 border-[#73b8cb] p-6">
        <div className="flex-1 text-left">
          <div
            onClick={handleOpenAddGratitudeModal}
            className="text-white text-4xl cursor-pointer"
          >
            <SmileIcon className="w-12 h-12 border-white border-[3px] rounded-full" />
          </div>
        </div>
        <div className="flex-1">
          <div onClick={handleNavigateHome}>
            {sticky ? <SmileIcon className="w-8 h-8" /> : <Title />}
          </div>
        </div>
        <div className="flex-1 text-right">
          <div onClick={handleOpenMenu} className="text-3xl text-white">
            <MenuOutlined />
          </div>
        </div>
      </div>
    </section>
  );
};
