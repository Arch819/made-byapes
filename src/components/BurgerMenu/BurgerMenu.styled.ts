import styled from '@emotion/styled';

export const BurgerMenuBoxStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface NavigationListProps {
  $themeDark: boolean;
}

export const NavigationListStyle = styled.ul<NavigationListProps>`
  position: absolute;
  top: 0;
  right: 48px;
  display: flex;
  border-radius: 12px 0 0 12px;
  background: ${props => (props.$themeDark ? '#1e1e1e1a' : '#ffffff1a')};
  opacity: 0;
  transition:
    opacity var(--transition),
    transform var(--transition);
  transform: scaleX(0.5) translateX(50%);

  &.open {
    opacity: 1;
    transform: scale(1);
  }
  @media screen and (min-width: 1280px) {
    right: 80px;
  }
`;
interface NavigationLinkProps {
  $hoverColor?: string;
}
export const NavigationItemStyle = styled.a<NavigationLinkProps>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-color: transparent;

  font-family: 'Messina Sans Mono';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  color: inherit;
  transition: color var(--transition);

  &.link {
    color: currentColor;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    color: ${props => props.$hoverColor};
  }
  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;

    font-size: 16px;
    line-height: 1.18;
  }
`;

type BtnOpenMenuProps = {
  $isOpen: boolean;
  $themeDark: boolean;
};
export const BtnOpenMenuStyle = styled(NavigationItemStyle)<BtnOpenMenuProps>`
  border-radius: 8px;
  background: ${props => (props.$themeDark ? '#1e1e1e1a' : '#ffffff1a')};

  @media screen and (min-width: 768px) {
    border-radius: ${props => (props.$isOpen ? '0 12px 12px 0' : '12px')};
  }
  @media screen and (min-width: 1280px) {
    border-radius: ${props => (props.$isOpen ? '0 12px 12px 0' : '12px')};
  }
`;
