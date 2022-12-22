import { useState, useEffect } from 'react';

const mobileWidth = 600;

const IsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < mobileWidth) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default IsMobile;
