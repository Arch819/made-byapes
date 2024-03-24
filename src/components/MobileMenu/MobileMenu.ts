import styled from 'styled-components';

export const MenuContainerStyle = {
  background: '#1e1e1e',
  color: '#ffffff',
};

export const NavListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 100%;
  margin-bottom: 66px;
`;

export const NavLinkStyle = styled.a`
  display: block;
  padding: 5px;

  font-family: 'Messina Sans Mono';
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-dark-theme);
  text-decoration: none;
`;
