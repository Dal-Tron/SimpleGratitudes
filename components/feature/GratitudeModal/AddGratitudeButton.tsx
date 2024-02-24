import { SmileTwoTone } from '@ant-design/icons';
import clsx from 'clsx';
import { useState } from 'react';

export const AddGratitudeButton = ({
  onClick = () => {},
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  const [animateGratitudeButton, setAnimateGratitudeButton] = useState(false);

  const animateButton = () => {
    setAnimateGratitudeButton(true);

    setTimeout(() => {
      setAnimateGratitudeButton(false);
    }, 200);
  };

  const handleAddGratitude = () => {
    animateButton();

    return onClick();
  };

  return (
    <div
      className={clsx('hide-on-mobile gratitude gratitude-button', className)}
      onClick={handleAddGratitude}
    >
      <div
        className={`gratitude-container ${
          animateGratitudeButton ? 'gratitude-button-pressed' : ''
        }`}
      >
        <span className="gratitude-text">
          <SmileTwoTone style={{ fontSize: 40 }} twoToneColor="#73b8cb" />
        </span>
      </div>
    </div>
  );
};
