import styled from 'styled-components';

interface HeaderProps {
  $themeDark: boolean;
  $mobileMenu: boolean;
}

export const HeaderStyle = styled.header<HeaderProps>`
  position: ${props => (props.$mobileMenu ? 'fixed' : 'absolute')};
  top: 54px;
  left: 8px;
  right: 8px;
  z-index: 1400;
  pointer-events: auto;
  color: ${props => (props.$themeDark ? '#1e1e1e' : '#ffffff')};
  @media screen and (min-width: 768px) {
    left: 16px;
    right: 16px;
  }
  @media screen and (min-width: 1280px) {
    top: 16px;
  }
`;

export const HeaderContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  @media screen and (min-width: 768px) {
    max-width: 736px;
    padding: 12px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1212px;
    padding: 24px 0;
  }
`;

export const FixedBlockStyled = styled.div`
  width: 48px;
  @media screen and (min-width: 1280px) {
    width: 80px;
  }
`;

interface NavigationPanelProps {
  $isScroll: boolean;
}

export const NavigationPanelStyle = styled.div<NavigationPanelProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  ${props =>
    !props.$isScroll &&
    `
position: fixed;
  // top: 54px;
  z-index: 1400;
`}
`;
