import React from 'react';
import dayjs from 'dayjs';

const Gratitude = ({ gratitude, username, date, showShare = true }) => {
  return (
    <span className='gratitude'>
      <div className='gratitude-container'>
        <span className='gratitude-text'>{gratitude}</span>
        {showShare && <span className='gratitude-from'>Shared by {username}</span>}
        <span className='gratitude-date'>{dayjs(date).format('MMMM D, YYYY')}</span>
      </div>
    </span>
  )
}

export default Gratitude;