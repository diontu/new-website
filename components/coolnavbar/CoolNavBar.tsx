import { useRouter } from 'next/router';
import { navLinks } from '../../utils/constants';

// components
import Card from '../../components/card/Card';

// styles
import styles from './CoolNavBar.module.css';

const CoolNavBar = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className={styles.grid}>
      {navLinks.map((link) => {
        console.log(router.pathname, link.href, router.pathname === link.href);
        return (
          <Card
            key={link.name}
            icon={link.icon}
            title={link.name}
            description={link.description}
            href={link.href}
            isActive={router.pathname === link.href}
          />
        );
      })}
    </div>
  );
};

export default CoolNavBar;
