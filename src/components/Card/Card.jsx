import React from 'react';
import styles from './Card.module.css';
import Chip from '@mui/material/Chip';

const Card = ({ image = '', title = '', follows = 0, likes = 0, type = 'album' }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <Chip
          label={`${type === 'song' ? likes : follows} ${type === 'song' ? 'Likes' : 'Follows'}`}
          className={styles.chip}
        />
      </div>
    </div>
  );
};

export default Card;
