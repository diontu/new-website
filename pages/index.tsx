// internal
import { navLinks } from '../utils/constants';

// components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import Card from '../components/card/Card';
import NavBar from '../components/navbar/NavBar';

// styles
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <NavBar links={navLinks} />

      <main className={styles.main}>
        {/* The main content starts here */}
        <div>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
        {/* The main content ends here */}

        <div className={styles.grid}>
          {navLinks.map((link) => (
            <Card
              key={link.name}
              icon={link.icon}
              title={link.name}
              description={link.description}
              href={link.href}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
