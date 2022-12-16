import Link from 'next/link';
import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
  href?: string;
  onClick?: any;
  isActive?: boolean;
};

const Card = ({
  title,
  description,
  icon,
  href,
  onClick,
  isActive,
}: CardProps): JSX.Element => {
  return (
    <Link
      href={href!}
      onClick={onClick}
      className={`${styles.card} ${isActive ? styles.active : ''}`}
    >
      <div className={styles.titleContainer}>
        <div className={styles.titleIcon}>{icon}</div>
        <h2>{title} &rarr;</h2>
      </div>
      <p>{description}</p>
    </Link>
  );
};

export default Card;
