import { useState, useEffect } from 'react';

import { animated, useSpring } from '@react-spring/web';

type Props = {
  /** Number in milliseconds */
  delay?: number;

  /** Children elements */
  children: JSX.Element;
};

const FadeIn = ({ delay, children }: Props): JSX.Element => {
  const [makeContentVisible, setMakeContentVisible] = useState(false);
  useEffect(() => {
    setMakeContentVisible(true);
  }, []);

  const styles = useSpring({
    delay,
    opacity: makeContentVisible ? 1 : 0,
    y: makeContentVisible ? 0 : 24,
  });
  return <animated.div style={styles}>{children}</animated.div>;
};

export default FadeIn;
