import { navLinks } from '../../utils/constants';

// components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/NavBar';
import CoolNavBar from '../../components/coolnavbar/CoolNavBar';

import styles from './LayoutOne.module.css';

type LayoutOneProps = {
  title: React.ReactNode;
  titleAlign: 'left' | 'center' | 'right';
  children: React.ReactNode;
  subtitle?: React.ReactNode;
};

export default function LayoutOne({
  title,
  titleAlign,
  children,
  subtitle,
}: LayoutOneProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar links={navLinks} />

      <main className={styles.main}>
        <CoolNavBar />

        {/* The main content starts here */}
        <div className={`${styles.mainContent} ${styles[titleAlign]}`}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          {children}
        </div>
        {/* The main content ends here */}
      </main>

      <Footer />
    </div>
  );
}
