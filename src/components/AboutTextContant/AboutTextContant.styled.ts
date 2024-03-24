import styled from 'styled-components';

export const AboutContentBoxStyle = styled.div`
  padding: 0 64px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 592px;
    display: grid;
    grid-template-areas:
      't tt'
      't i'
      'bt i';
    grid-template-columns: 270px 1fr;
    grid-template-rows: 114px 1fr;
    column-gap: 10px;
    padding: 0;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1032px;
    grid-template-columns: 538px 1fr;
    grid-template-rows: 198px 1fr;
    column-gap: 10px;
  }
`;

export const AboutTitleStyle = styled.h2`
  margin-bottom: 16px;

  font-size: 40px;
  line-height: 1;

  .second-color {
    color: var(--color-secondary);
  }

  @media screen and (min-width: 768px) {
    grid-area: t;
    font-size: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 56px;
    font-size: 120px;
  }
`;

export const AboutDescriptionStyle = styled.p`
  font-family: 'Messina Sans Mono';
  &.top-text {
    margin-bottom: 36px;

    font-size: 16px;
    line-height: 1.18;
    text-align: end;
  }

  &.bottom-text {
    margin-bottom: 40px;

    font-size: 12px;
    line-height: 1.16;
    text-align: center;
  }

  & .x-icon {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    &.top-text {
      grid-area: tt;
      width: 275px;
      margin-left: auto;
      margin-bottom: 0;
      padding-top: 11px;
      text-align: end;
    }
    &.bottom-text {
      grid-area: bt;
      margin-bottom: 36px;

      font-size: 16px;
      line-height: 1.18;
      text-align: center;
    }
    & .x-icon {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 1280px) {
    &.top-text {
      width: 409px;
      margin-bottom: 0px;
      padding-top: 24px;

      font-size: 24px;
      line-height: 1.2;
    }
    &.bottom-text {
      width: 417px;
      margin-bottom: 40px;

      font-size: 24px;
      line-height: 1.2;
      text-align: center;
    }
    & .x-icon {
      width: 36px;
      height: 36px;
      margin-bottom: 36px;
    }
  }
`;

export const AboutImgBoxStyle = styled.div`
  width: 216px;
  height: 292px;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    grid-area: i;
    width: 312px;
    height: 422px;
  }
  @media screen and (min-width: 1280px) {
    width: 492px;
    height: 662px;
    margin-top: auto;
  }
`;
