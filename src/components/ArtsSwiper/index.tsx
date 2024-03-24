import { SwiperSlide } from 'swiper/react';
import SwiperComponent from '../SwiperComponent';
import './artsSwiperStyle.css';

export type ArtsListProps = {
  src: string[];
  alt: string;
};

export interface IArtsSwiperProps {
  artsList: Array<ArtsListProps>;
}

export default function ArtsSwiper({ artsList }: IArtsSwiperProps) {
  return (
    <SwiperComponent>
      {artsList.map((art, i) => {
        return (
          <SwiperSlide key={i}>
            <img
              srcSet={`${art.src[0]} 1x, ${art.src[1]} 2x`}
              src={art.src[0]}
              alt={art.alt}
              width={308}
              height={314}
            />
          </SwiperSlide>
        );
      })}
    </SwiperComponent>
  );
}
