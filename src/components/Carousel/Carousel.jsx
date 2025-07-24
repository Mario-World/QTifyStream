// Carousel.jsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';

const Carousel = ({ items }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.carouselWrapper}>
      <div className={`${styles.navButton} ${styles.left}`} ref={prevRef}>
        <img src="/assets/left_arrow.svg" alt="Left" />
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={'auto'}
        spaceBetween={20}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles.navButton} ${styles.right}`} ref={nextRef}>
        <img src="/assets/right_arrow.svg" alt="Right" />
      </div>
    </div>
  );
};

export default Carousel;


///assets/right_arrow.svg
  