import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
  href?: string;
  onClick?: any;
};

const Card = ({
  title,
  description,
  icon,
  href,
  onClick,
}: CardProps): JSX.Element => {
  return (
    <a href={href} onClick={onClick} className={styles.card}>
      <div className={styles.titleContainer}>
        <div className={styles.titleIcon}>{icon}</div>
        <h2>{title} &rarr;</h2>
      </div>
      <p>{description}</p>
    </a>
  );
};

export default Card;
