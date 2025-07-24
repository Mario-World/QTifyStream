import React, { useEffect, useState } from 'react';
import styles from './Section.module.css';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import axios from 'axios';

const Section = ({
  title,
  type = 'album',
  endpoint,
  data: propData,
  showToggleButton = true,
}) => {
  const [data, setData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (propData) {
        setData(propData);
        return;
      }
      try {
        const response = await axios.get(endpoint);
        setData(Array.isArray(response.data) ? response.data : response.data.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [endpoint, propData]);

  const handleToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>{title}</h2>
        {showToggleButton && (
          <span
            className={styles.toggleText}
            data-testid="toggle-button"
            onClick={handleToggle}
          >
            {isCollapsed ? 'Show All' : 'Collapse'}
          </span>
        )}
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
