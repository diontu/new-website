import React from 'react';
import styles from './NavBar.module.css';

type NavBarProps = {
  links: {
    href: string;
    name: string;
    onClick?: any;
  }[];
};

const NavBar = ({ links }: NavBarProps): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <div className={styles.signature}></div>
      <div className={styles.linksContainer}>
        {links.map((link) => (
          <a
            key={link.name}
            className={styles.link}
            onClick={link.onClick}
            href={link.href}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
