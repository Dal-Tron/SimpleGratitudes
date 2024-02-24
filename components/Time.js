import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

const Time = () => {
  const getTime = () => dayjs().format('h:mm A MMMM D, YYYY');
  const [time, setTime] = useState(() => getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(() => getTime());
    }, 10000);

    return () => clearInterval(timer);
  });

  return (
    <section className="time">
      {time}
    </section>
  )
}

export default Time;