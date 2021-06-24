import React from 'react'
import { supabase } from 'Supabase/client'

import MainPage from 'Components/MainPage'

export async function getStaticProps(context) {
  const { data, error } = await supabase.from('gratitudes').select('*').eq('approved', true);

  if (error) {
    console.log('fetching gratitudes error: ', error.message);
  }

  return {
    props: {
      gratitudes: data || []
    }
  }
}

export default function Home({ gratitudes }) {
  return <MainPage gratitudes={gratitudes} />
}
