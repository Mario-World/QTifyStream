import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';

import right from '../../assets/right_arrow.svg';
import left from '../../assets/left_arrow.svg';

const Carousel = ({ items }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      !swiperInstance.destroyed
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  

  return (
    <div className={styles.carouselWrapper}>
      {/* Custom Left Arrow */}
      <div
        ref={prevRef}
        className={`${styles.navButton} ${styles.left}`}
        role="button"
        tabIndex={0}
      >
        <img src={left} alt="Previous" />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={2}
        slidesPerView="auto"
        onSwiper={setSwiperInstance}
        className={styles.swiper}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {(items || []).map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Right Arrow */}
      <div
        ref={nextRef}
        className={`${styles.navButton} ${styles.right}`}
        role="button"
        tabIndex={0}
      >
        <img src={right} alt="Next" />
      </div>
    </div>
  );
};

export default Carousel;
