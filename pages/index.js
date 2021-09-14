import React, { useState } from 'react'
import { useRouter } from 'next/router'

import MainPage from 'Components/MainPage'

export default function Home() {
  const [triggerSignIn, setTriggerSignIn] = useState(false);
  const router = useRouter();

  if (router.query && router.query.access_restricted) {
    router.query = {};
    router.replace({
      query: {},
      pathname: '/',
    });
    setTriggerSignIn(true);
  }

  return <MainPage triggerSignIn={triggerSignIn} />
}
