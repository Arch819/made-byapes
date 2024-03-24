import styled from 'styled-components';

export const HeroSectionStyle = styled.section`
  padding-top: 36px;
  border-radius: 12px;
  background-color: #dc3d5a;

  .hero-wrapper {
    padding-bottom: 19px;
    text-align: center;
    color: var(--color-light-theme);
  }

  @media screen and (min-width: 768px) {
    padding-top: 124px;
    border-radius: 16px;

    .hero-wrapper {
      position: relative;
      padding-bottom: 4px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 197px;
    border-radius: 24px;

    .hero-wrapper {
      padding-bottom: 46px;
    }
  }
`;

export const HeroTextStyle = styled.p`
  font-family: 'Biro Script Plus';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.68;
  text-transform: none;
  &.under-title {
    margin-bottom: 6px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.65;
    text-align: start;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.66;

    &.under-title {
      margin-left: 120px;
    }
  }
`;

export const HeroTitleStyle = styled.h1`
  margin-bottom: 8px;
  font-size: 44px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    font-size: 92px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;

    font-size: 164px;
  }
`;

export const HeroImgBoxStyle = styled.div`
  max-width: 100%;
  width: 216px;
  height: 284px;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 134px;
    width: 283px;
    height: 386px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    left: 250px;
    width: 463px;
    height: 612px;
  }
`;

export const HeroButtonBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 768px) {
    width: 190px;
    gap: 16px;
    margin-left: auto;
    transform: translateY(-24px);
  }
  @media screen and (min-width: 1280px) {
    width: 337px;
    gap: 28px;
    margin-left: auto;
    transform: translateY(-24px);
  }
`;

export const HeroLinkStyle = styled.a`
  position: relative;
  width: 100%;
  max-width: 248px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 0 12px;
  transform: translateY(-4px);
  border-radius: 8px;
  background: #1e1e1e1a;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.18;
  color: var(--color-light-theme);
  text-decoration: none;
  overflow: hidden;
  transition: color var(--transition);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: #c93a54;
    filter: blur(2px);
    z-index: -1;
  }

  &:hover {
    color: var(--color-dark-theme);
  }

  @media screen and (min-width: 768px) {
    max-width: none;
    margin-right: 0;
    border-radius: 12px;
    order: 2;
    transform: translateY(0);
    &::before {
      width: 10px;
      height: 100%;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 16px 0 20px;
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const HeroBottomTextStyle = styled.p`
  font-family: 'Messina Sans Mono ';
  font-size: 12px;
  line-height: 1.16;

  @media screen and (min-width: 768px) {
    text-align: start;
    &::first-letter {
      margin-left: 40%;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.18;
    &::first-letter {
      margin-left: 28%;
    }
  }
`;
