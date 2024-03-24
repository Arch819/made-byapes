import styled from 'styled-components';

interface LogoStyleProps {
  $hoverColor: string;
}

export const LogoStyle = styled.a<LogoStyleProps>`
  padding-top: 8px;
  color: inherit;

  .icon-logo {
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    fill: currentColor;
  }

  &:hover .icon-logo {
    fill: ${props => props.$hoverColor};
  }
  @media screen and (min-width: 1280px) {
    padding-top: 16px;
    .icon-logo {
      width: 72px;
      height: 50px;
    }
  }
`;
