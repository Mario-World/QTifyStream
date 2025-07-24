import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
     
      <div className={styles.heroImage}>
        <img src="/assets/hero_headphones.png" alt="Headphones Illustration" />
      </div>
    </div>
  );
};

export default Hero;
