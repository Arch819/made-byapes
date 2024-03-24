import styled from 'styled-components';

export const FaqListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaqItemStyle = styled.li`
  position: relative;
  padding: 8px 8px 10px;
  cursor: pointer;
  border-radius: 12px;
  transition: background var(--transition);

  & > div {
    height: 100%;
  }
  &.open {
    background: #1e1e1e;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 148px 1fr;
    gap: 24px;
    padding: 18px 16px 24px 19px;
    border-radius: 16px;

    background: #1e1e1e00;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 248px 1fr;
    gap: 14px;
    padding: 24px 24px 24px 16px;
    border-radius: 24px;
  }
`;

export const FaqItemImgBoxStyle = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 148px;
    height: 183px;
    overflow: hidden;
    border-radius: 16px;
    transform: rotate(-16deg) translate(150px, -5px) scale(0.4);
    transition: transform var(--transition);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    li.open & {
      display: block;
      transform: rotate(-16deg) translate(20px, -5px);
    }
  }
  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 282px;
    border-radius: 24px;
    transform: rotate(-8deg) translate(150px, -14px) scale(0.4);
  }
`;

export const FaqTextContentStyle = styled.div`
  display: grid;
  grid-template-columns: 26px 1fr;
  gap: 5px;

  .item-index {
    font-family: 'Biro Script Plus Bold US';
    font-size: 12px;
    font-weight: bold;
    line-height: 1.66;
    color: var(--color-secondary);
    transition: color var(--transition);
    li:hover &,
    li.open & {
      color: var(--color-dark-theme);
    }
  }
  .title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    transition: color var(--transition);

    li:hover &,
    li.open & {
      color: var(--color-secondary);
    }
  }
  .description {
    height: 0;
    overflow: hidden;
    font-family: 'Messina Sans Mono';
    font-size: 12px;
    line-height: 1.16;
    transition: height var(--transition);
    li.open & {
      height: auto;
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 35px 1fr;
    gap: 19px;

    .item-index {
      font-size: 16px;
      line-height: 1.68;
    }

    .title {
      font-size: 32px;
    }

    .description {
      li.open & {
        margin-top: 12px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 52px 1fr;
    gap: 24px;
    .item-index {
      font-size: 24px;
      line-height: 1.66;
    }

    .title {
      font-size: 64px;
    }

    .description {
      li.open & {
        margin-top: 36px;
      }

      font-size: 16px;
      line-height: 1.18;
    }
  }
`;
