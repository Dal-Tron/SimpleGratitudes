import { useState } from 'react';
import dayjs from 'dayjs';

import { useAddGratitudeModal } from 'Context/modal';
import { useProfile } from 'Context/profile';

const Gratitude = ({
  gratitude,
  username,
  date,
  showShare = true,
  id,
  publicGratitude,
  starred = false,
}) => {
  const [pressed, setPressed] = useState(false);
  const { username: profileUsername } = useProfile();

  const { updateAddGratitudeModal, setEditableGratitude } = useAddGratitudeModal();

  const animateGratitude = () => {
    setPressed(true);

    setTimeout(() => {
      setPressed(false);
    }, 200);
  }

  const handleEditGratitude = () => {
    if (username === profileUsername) {
      animateGratitude();
      updateAddGratitudeModal(true);
      setEditableGratitude({
        gratitude,
        date,
        id,
        public: publicGratitude,
      });
    }
  }

  return (
    <span onClick={handleEditGratitude} className='gratitude'>
      <div className={`gratitude-container ${pressed ? 'gratitude-pressed' : ''}`}>
        <span className='gratitude-text'>{gratitude}</span>
        {showShare && <span className='gratitude-from'>Shared by {username}</span>}
        {!starred && (
          <span className='gratitude-date'>{dayjs(date).format('MMMM D, YYYY')}</span>
        )}
      </div>
    </span>
  )
}

export default Gratitude;