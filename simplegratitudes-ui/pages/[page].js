import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import dayjs from 'dayjs'
import { SmileTwoTone } from '@ant-design/icons'
import { useRouter } from 'next/router'

import { supabase } from 'Supabase/client'
import { useAuth } from 'Context/auth'

import Gratitude from 'Components/Gratitude'

export default function Page() {
  const getTime = () => dayjs().format('h:mm A MMMM D, YYYY');
  const [time, setTime] = useState(() => getTime());
  const [gratitudes, setGratitudes] = useState([]);
  const router = useRouter();
  const { page } = router.query;
  const { user, signOut } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(() => getTime());
    }, 10000);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data = [], error } = await supabase.from('gratitudes').select('*').eq('username', page);

      if (error) {
        console.log('fetching gratitudes error: ', error.message);
      }

      setGratitudes(data);
    }

    fetchData();
  }, [page]);

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
          <div>{page}'s</div>
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
        {gratitudes.map(({ id, gratitude, username, inserted_at }) => (
          <Gratitude
            key={id}
            gratitude={gratitude}
            username={username}
            date={inserted_at}
          />
        ))}
      </section>
    </div >
  )
}
