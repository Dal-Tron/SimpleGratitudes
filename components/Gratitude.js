import { useState } from 'react'
import dayjs from 'dayjs'

import StarIcon from 'Components/Icons/StarIcon'

import { useAddGratitudeModal } from 'Context/modal'
import { useAuthState } from 'Context/auth'

const Gratitude = ({
  approved = false,
  date,
  frontPage = false,
  gratitude,
  id,
  mainPage = false,
  publicGratitude,
  showShare = true,
  userId = '',
  username,
}) => {
  const [pressed, setPressed] = useState(false);
  const { user } = useAuthState();

  const { updateAddGratitudeModal, setEditableGratitude } = useAddGratitudeModal();

  const animateGratitude = () => {
    setPressed(true);

    setTimeout(() => {
      setPressed(false);
    }, 200);
  }

  const handleEditGratitude = () => {
    if (user.id === userId) {
      animateGratitude();
      updateAddGratitudeModal(true);
      setEditableGratitude({
        gratitude,
        date,
        id,
        public: publicGratitude,
        frontpage: frontPage,
      });
    }
  }

  return (
    <span onClick={handleEditGratitude} className='gratitude'>
      <div className={`gratitude-container ${pressed ? 'gratitude-pressed' : ''}`}>
        {frontPage && approved && <div className='gratitude-star-container'><div className='gratitude-star'><StarIcon /></div></div>}
        <span className='gratitude-text'>{gratitude}</span>
        {showShare && <span className='gratitude-from'>Shared by {username}</span>}
        {!mainPage && (
          <span className='gratitude-date'>{dayjs(date).format('MMMM D, YYYY')}</span>
        )}
      </div>
    </span>
  )
}

export default Gratitude;