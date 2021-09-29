import { useState } from 'react'
import dayjs from 'dayjs'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

import { useAddGratitudeModal } from 'Context/modal'
import { useAuthState } from 'Context/auth'

const Gratitude = ({
  date,
  gratitude,
  id,
  mainPage = false,
  publicGratitude,
  showShare = true,
  userId = '',
  username,
  showPublic = true,
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
      });
    }
  }

  const renderShare = () => {
    if (!mainPage) return <span className='gratitude-from'>{publicGratitude ? 'Public' : 'Private'} {publicGratitude ? <EyeOutlined /> : <EyeInvisibleOutlined />}</span>;

    if (showShare) return <span className='gratitude-from'>Shared by {username}</span>;

    return null;
  }

  const renderDate = () => {
    if (!mainPage) return <span className='gratitude-date'>{dayjs(date).format('MMMM D, YYYY')}</span>;

    return null;
  }

  return (
    <span onClick={handleEditGratitude} className='gratitude'>
      <div className={`gratitude-container ${pressed ? 'gratitude-pressed' : ''}`}>
        <span className='gratitude-text'>{gratitude}</span>
        {renderShare()}
        {renderDate()}
      </div>
    </span>
  )
}

export default Gratitude;