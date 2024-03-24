import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperStyle.css';

export interface IArtsSwiperProps {
  children: React.ReactNode;
  styleBtnNav?: React.CSSProperties;
}

export default function SwiperComponent({
  children,
  styleBtnNav,
}: IArtsSwiperProps) {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {children}
      <div className="swiper-navigation-box">
        <div className="swiper-button-prev" style={styleBtnNav}>
          Prev
        </div>
        <div className="swiper-button-next" style={styleBtnNav}>
          Next
        </div>
      </div>
    </Swiper>
  );
}
