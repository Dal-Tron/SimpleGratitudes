import { SmileTwoTone } from '@ant-design/icons';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

interface AddGratitudeButtonProps {
  onClick: () => void;
  className?: string;
}

export const AddGratitudeButton: FC<AddGratitudeButtonProps> = ({
  onClick,
  className,
}) => {
  const [pressed, setPressed] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (pressed) {
      timer = setTimeout(() => setPressed(false), 200);
    }
    return () => clearTimeout(timer);
  }, [pressed]);

  const handleButtonClick = () => {
    setPressed(true);
    onClick();
  };

  return (
    <div className={clsx('p-8', className)} onClick={handleButtonClick}>
      <div
        className={clsx(
          'bg-primary-0 p-4 rounded-[20px] flex flex-col min-w-[100px]',
          pressed ? 'gratitude-pressed-shadow' : 'gratitude-container-shadow',
        )}
      >
        <div className="text-5xl flex justify-center">
          <SmileTwoTone twoToneColor="#73b8cb" />
        </div>
      </div>
    </div>
  );
};
