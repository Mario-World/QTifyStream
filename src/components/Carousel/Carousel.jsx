import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';
import right from '../../assets/right_arrow.svg';
import left from '../../assets/left_arrow.svg';

const Carousel = ({ items }) => {
  const [navReady, setNavReady] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div ref={prevRef} className={`${styles.navButton} ${styles.left}`}>
        <img src={left} alt="Previous" />
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={'auto'}
        spaceBetween={20}
        navigation={navReady ? {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        } : false}
        onSwiper={(swiper) => {
          if (navReady) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      <div ref={nextRef} className={`${styles.navButton} ${styles.right}`}>
        <img src={right} alt="Next" />
      </div>
    </div>
  );
};

export default Carousel;
