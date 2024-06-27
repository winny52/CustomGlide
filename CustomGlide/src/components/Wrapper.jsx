import React from 'react';
import useScrollToTop from '../hooks/TopScroll';

const ScrollToTopWrapper =({ children }) => {
  useScrollToTop();
  return <>{children}</>;
};

export default ScrollToTopWrapper;