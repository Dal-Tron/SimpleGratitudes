import React from 'react';
import { useRouter } from 'next/router'

const Title = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div onClick={() => router.push('/')} className='intention'>
      <div>{!page ? 'Simple' : `${page}'s`}</div>
      <div>{!page ? 'Gratitudes' : 'gratitudes'}</div>
    </div>
  )
}

export default Title;


