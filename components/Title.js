import React from 'react';
import { useRouter } from 'next/router'

const Title = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div onClick={() => router.push('/')} className='intention'>
      <div>{!page ? 'Simple' : `${page}'s`}</div>
      <div>Gratitudes</div>
    </div>
  )
}

export default Title;


