import { useState } from 'react'
import { SmileTwoTone } from '@ant-design/icons'

import { useAuthState } from 'Context/auth'
import { useSignModal } from 'Context/modal'

const AddGratitudeButton = ({ onClick = () => { } }) => {
  const [animateGratitudeButton, setAnimateGratitudeButton] = useState(false);

  const { session } = useAuthState();
  const { updateSignModal } = useSignModal();

  const animateButton = () => {
    setAnimateGratitudeButton(true);

    setTimeout(() => {
      setAnimateGratitudeButton(false);
    }, 200);
  }

  const handleAddGratitude = () => {
    animateButton();

    if (!session.access_token) return updateSignModal(true);

    return onClick();
  }

  return (
    <div className='hide-on-mobile gratitude gratitude-button' onClick={handleAddGratitude}>
      <div className={`gratitude-container ${animateGratitudeButton ? 'gratitude-button-pressed' : ''}`}>
        <span className='gratitude-text'>
          <SmileTwoTone style={{ fontSize: 40 }} twoToneColor='#73b8cb' />
        </span>
      </div>
    </div>
  );
}

export default AddGratitudeButton;
