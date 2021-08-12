import React from 'react';
import { useRouter } from 'next/router'

const Title = ({ pageType = 'main', page = 'user' }) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/')} className='intention'>
      <div>{pageType === 'main' ? 'Simple' : `${page}'s`}</div>
      <div>{pageType === 'main' ? 'Gratitudes' : 'gratitudes'}</div>
    </div>
  )
}

export default Title;


