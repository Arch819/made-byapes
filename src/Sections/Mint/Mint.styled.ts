import styled from 'styled-components';

export const CrossMarkIconStyle = styled.svg`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const MintTopTextStyle = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;

  font-family: 'Messina Sans Mono';
  font-size: 16px;
  line-height: 1.19;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 397px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 580px;
    margin-bottom: 40px;

    font-size: 24px;
    line-height: 1.2;
  }
`;
