import styled from 'styled-components';

export const SectionTitleStyle = styled.h2`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;

  font-family: 'Right Grotesk';
  font-size: 44px;
  font-weight: 700;
  line-height: 0.9;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 80px;
    line-height: 1;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;

    font-size: 160px;
  }
`;
