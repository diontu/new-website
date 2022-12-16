// components
import LayoutOne from '../layouts/layoutone/LayoutOne';

// external
import { FcPuzzle, FcAlarmClock, FcMultipleDevices } from 'react-icons/fc';

// styles
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
  const title = (): React.ReactNode => {
    return (
      <>
        Hey! I&lsquo;m <span className={styles.blue}>Dion.</span>
      </>
    );
  };
  const subtitle = (): React.ReactNode => {
    return (
      <>
        Your <span className={styles.blue}>Frontend Engineer</span>
      </>
    );
  };

  return (
    <LayoutOne title={title()} subtitle={subtitle()} titleAlign="center">
      <div className={styles.content}>
        <p>
          I&lsquo;m committed to deliver the{' '}
          <span className={styles.blue}>BEST UX</span> through modern designs{' '}
          <FcPuzzle />, layouts <FcMultipleDevices /> and short load times{' '}
          <FcAlarmClock />.
        </p>
      </div>
    </LayoutOne>
  );
}
