import React, { useState } from 'react';
import styles from './Section.module.css';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';

const Section = ({ title, data = [], type = 'album' }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>{title}</h2>
        <span
          className={styles.toggleText}
          onClick={handleToggle}
          data-testid="toggle-button"
        >
          {isCollapsed ? 'Show All' : 'Collapse'}
        </span>
      </div>

      {isCollapsed ? (
        <Carousel
          items={data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
              likes={item.likes}
              type={type}
            />
          ))}
        />
      ) : (
        <div className={styles.cardGrid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
              likes={item.likes}
              type={type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
