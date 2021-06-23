import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import dayjs from 'dayjs'
import { SmileTwoTone } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { useAuth } from 'Context/auth'

export default function Home() {
  const getTime = () => dayjs().format('h:mm A MMMM D, YYYY');
  const [time, setTime] = useState(() => getTime());
  const router = useRouter();
  const { page } = router.query;
  const { user, signOut } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(() => getTime());
    }, 10000);

    return () => clearInterval(timer);
  });

  return (
    <div className='wrapper'>
      <Head>
        <title>Simple Gratitudes</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <section className="headspace">
        <div className='intention'>
          <div>{page}</div>
          <div>gratitudes</div>
        </div>
        <div className='avatar'>
          <SmileTwoTone twoToneColor='#73b8cb' />
        </div>
      </section>
      <section className="time">
        {time}
      </section>
      <section className="container">
        Hello
      </section>
    </div >
  )
}
