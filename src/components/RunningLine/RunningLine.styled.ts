import styled from 'styled-components';

export const RunningLineListStyle = styled.ul`
  height: 52px;
  display: flex;
  align-items: center;
  gap: 24px;
  animation: moveText 10s linear infinite;

  @keyframes moveText {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 24px));
    }
  }
  @media screen and (min-width: 1280px) {
    height: 86px;
    gap: 36px;
    @keyframes moveText {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% - 36px));
      }
    }
  }
`;

export const RunningLineItem = styled.li`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 6px 0 9px;

  .text {
    font-size: 36px;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
  }
  .icon {
    padding-top: 6px;
  }

  @media screen and (min-width: 1280px) {
    gap: 36px;
    padding: 6px 0 16px;

    .text {
      font-size: 64px;
    }
    .icon {
      padding-top: 10px;
    }
  }
`;
