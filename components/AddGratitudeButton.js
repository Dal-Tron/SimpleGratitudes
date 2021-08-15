import { useState } from 'react'
import { PlusCircleOutlined } from '@ant-design/icons'

import { useAuth } from 'Context/auth'
import { useSignModal } from 'Context/modal'

const AddGratitudeButton = ({ onClick = () => { } }) => {
  const windowWidth = window.innerWidth;
  const [animateGratitudeButton, setAnimateGratitudeButton] = useState(false);

  const { user } = useAuth();
  const { updateSignModal } = useSignModal();

  const animateButton = () => {
    setAnimateGratitudeButton(true);

    setTimeout(() => {
      setAnimateGratitudeButton(false);
    }, 200);
  }

  const handleAddGratitude = () => {
    animateButton();

    if (!user) {
      return updateSignModal(true);
    }

    return onClick();
  }

  if (windowWidth > 500) {
    return (
      <div className='gratitude gratitude-button' onClick={() => handleAddGratitude()}>
        <div className={`gratitude-container ${animateGratitudeButton ? 'gratitude-button-pressed' : ''}`}>
          <span className='gratitude-text'>
            <PlusCircleOutlined style={{ fontSize: 40 }} />
          </span>
        </div>
      </div>
    )
  }

  return null;
}

export default AddGratitudeButton;
