import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

const Time = () => {
  const getTime = () => dayjs().format('h:mm A MMMM D, YYYY');
  const [time, setTime] = useState(() => getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(() => getTime());
    }, 10000);

    return () => clearInterval(timer);
  });

  return <section className="time">{time}</section>;
};

export default Time;
