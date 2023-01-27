// components
import LayoutOne from '../layouts/layoutone/LayoutOne';

// external
import { FcPuzzle, FcAlarmClock, FcMultipleDevices } from 'react-icons/fc';

// styles
import styles from '../styles/Home.module.css';
import FadeIn from '../components/transitions/FadeIn';

export default function Home(): JSX.Element {
  const title = (): React.ReactNode => {
    return (
      <>
        Hey! I&lsquo;m <span className={styles.brand}>Dion.</span>
      </>
    );
  };
  const subtitle = (): React.ReactNode => {
    return (
      <>
        Your <span className={styles.brand}>Frontend Engineer</span>
      </>
    );
  };

  return (
    <LayoutOne title={title()} subtitle={subtitle()} titleAlign="center">
      <div className={styles.content}>
        <FadeIn>
          <p>
            I&lsquo;m committed to deliver the{' '}
            <span className={styles.brand}>BEST UX</span> through modern designs{' '}
            <FcPuzzle />, layouts <FcMultipleDevices /> and short load times{' '}
            <FcAlarmClock />.
          </p>
        </FadeIn>
      </div>
    </LayoutOne>
  );
}
