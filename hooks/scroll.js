import { useEffect, useState } from 'react';

import { off, on } from '@/utils/base';
/**
 * useScrollingUp
 * @returns {boolean}
 */
const useScrolling = () => {
  let prevScroll;
  //if it is SSR then check you are now on the client and window object is available
  if (process.browser) {
    prevScroll = window.pageYOffset;
  }
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = 200 < currScroll;
    setScrolling(isScrolled);
  };
  useEffect(() => {
    on(window, 'scroll', handleScroll, { passive: true });
    return () => {
      off(window, 'scroll', handleScroll, { passive: true });
    };
  }, []);
  return scrolling;
};

export default useScrolling;
