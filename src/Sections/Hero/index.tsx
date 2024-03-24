import { RefObject, forwardRef } from 'react';
import mobileImg from '../../img/hero/hero-mobile.png';
import mobileImg2x from '../../img/hero/hero-mobile@2x.png';
import tabletImg from '../../img/hero/hero-tablet.png';
import tabletImg2x from '../../img/hero/hero-tablet@2x.png';
import desktopImg from '../../img/hero/hero-desktop.png';
import desktopImg2x from '../../img/hero/hero-desktop@2x.png';
import {
  HeroBottomTextStyle,
  HeroButtonBoxStyle,
  HeroImgBoxStyle,
  HeroLinkStyle,
  HeroSectionStyle,
  HeroTextStyle,
  HeroTitleStyle,
} from './Hero.styled';
import { smoothScrollToAnchor } from '../../utils/smoothScroll';

export interface IHeroProps {
  ref: RefObject<HTMLDivElement>;
}

const Hero = forwardRef<HTMLDivElement, IHeroProps>((props, ref) => {
  return (
    <HeroSectionStyle className="hero" id="hero" ref={ref}>
      <div className="container hero-wrapper">
        <HeroTextStyle className="above-title">diD yOu seE iT ?</HeroTextStyle>
        <HeroTitleStyle>
          <span>YACHT</span> <span>APES</span>
        </HeroTitleStyle>
        <HeroTextStyle className="under-title">
          Apes aRe eveRywhere
        </HeroTextStyle>
        <HeroImgBoxStyle>
          <picture>
            <source
              srcSet={`${desktopImg} 1x, ${desktopImg2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${tabletImg} 1x, ${tabletImg2x} 2x`}
              media="(min-width: 768px)"
            />
            <img
              srcSet={`${mobileImg} 1x, ${mobileImg2x} 2x`}
              src={mobileImg}
              alt="Hero images"
            />
          </picture>
        </HeroImgBoxStyle>
        <HeroButtonBoxStyle>
          <HeroLinkStyle href="#mint" onClick={smoothScrollToAnchor}>
            MEET APES{' '}
          </HeroLinkStyle>
          <HeroBottomTextStyle>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </HeroBottomTextStyle>
        </HeroButtonBoxStyle>
      </div>
    </HeroSectionStyle>
  );
});

export default Hero;
