import { useState } from 'react';
import dayjs from 'dayjs';

const Gratitude = ({
  gratitude,
  username,
  date,
  showShare = true
}) => {
  const [pressed, setPressed] = useState(false);

  const animateGratitude = () => {
    setPressed(true);

    setTimeout(() => {
      setPressed(false);
    }, 200);
  }

  return (
    <span onClick={animateGratitude} className='gratitude'>
      <div className={`gratitude-container ${pressed ? 'gratitude-pressed' : ''}`}>
        <span className='gratitude-text'>{gratitude}</span>
        {showShare && <span className='gratitude-from'>Shared by {username}</span>}
        <span className='gratitude-date'>{dayjs(date).format('MMMM D, YYYY')}</span>
      </div>
    </span>
  )
}

export default Gratitude;