import styled from 'styled-components';

export const MindMapListStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: stretch;
  gap: 24px;
`;

export const MindMapItemStyle = styled.li`
  height: 242px;
  display: grid;
  align-content: space-between;
  padding: 24px 12px;
  border-radius: 12px;
  background: #1e1e1e;

  &.link {
    background: #dc3b5a;
    color: inherit;
    text-decoration: none;
  }
  .top-text {
    font-family: 'Messina Sans Mono';
    font-size: 12px;
    line-height: 1.16;
  }
  .title {
    font-size: 32px;
    line-height: 1;
  }
  .link-icon {
    justify-self: end;
    padding: 0 12px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.link:hover .link-icon {
    transform: translate(12px, -12px);
  }

  @media screen and (min-width: 768px) {
    padding: 24px;
    border-radius: 16px;

    .top-text {
      max-width: 128px;
      margin-left: auto;
      padding: 12px;
    }
  }

  @media screen and (min-width: 1280px) {
    height: 480px;
    border-radius: 24px;

    .top-text {
      max-width: 228px;
      font-size: 24px;
      line-height: 1.2;
    }
    .title {
      font-size: 64px;
    }

    .link-icon svg {
      width: 40px;
      height: 40px;
    }
  }
`;
