import styled from 'styled-components';

export const SocialNetListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

interface SocialNetLinkProps {
  $hoverColor: string;
  $themeDark: boolean;
}

export const SocialNetLinkStyle = styled.a<SocialNetLinkProps>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background: ${props => (props.$themeDark ? '#1e1e1e1a' : '#ffffff1a')};
  color: inherit;

  .icon {
    pointer-events: none;
    fill: currentColor;
    transition: fill var(--transition);
  }

  &:hover .icon {
    fill: ${props => props.$hoverColor};
  }
  @media screen and (min-width: 768px) {
    border-radius: 12px;
    .icon {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;
