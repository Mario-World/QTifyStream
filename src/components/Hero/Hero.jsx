import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContent}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands of podcast episodes</p>
      </div>
      <div className={styles.imageContent}>
        <img src="/assets/hero_headphones.png" alt="headphones" />
      </div>
    </div>
  );
};

export default Hero;


// /assets/hero_headphones.png"