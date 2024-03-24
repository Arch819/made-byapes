import styled from 'styled-components';

interface styledProps {
  $error: boolean;
}

export const MintFormStyle = styled.form`
  display: flex;
  max-width: 248px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    max-width: 397px;
    gap: 24px;
  }
`;

export const MintFormLabelStyle = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 8px;
  background: #1e1e1e;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }

  @media screen and (min-width: 1280px) {
    .icon {
      padding: 20px;
    }
  }
`;

export const FieldStyle = styled.input<styledProps>`
  width: 100%;
  padding: 17px 24px;
  border-radius: 0 8px 8px 0;
  outline: none;
  border: 1px solid transparent;
  /* background-color: #181818; */
  background-color: #181818;

  background-clip: padding-box;

  font-family: 'Messina Sans Mono';
  font-size: 12px;
  line-height: 1.16;
  color: var(--color-dark-theme);
  transition: border var(--transition);
  &::placeholder {
    font-family: 'Messina Sans Mono';
    color: #ffffff3d;
    text-transform: uppercase;
  }

  &:focus {
    border: 1px solid;
    border-color: ${props => (props.$error ? '#DC3B5A' : '#ffffff')};
  }

  border-color: ${props => (props.$error ? '#DC3B5A' : 'transparent')};
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.9;
  }
`;

export const ErrorFieldTextStyle = styled.p`
  position: absolute;
  bottom: -2px;
  right: 0;
  transform: translateY(100%);

  font-family: 'Messina Sans Mono';
  font-size: 10px;
  line-height: 1.2;
  color: var(--color-secondary);
  text-transform: uppercase;
  @media screen and (min-width: 1280px) {
    font-size: 12px;
    line-height: 1.2;
  }
`;

export const MintFormSubmitBtnStyle = styled.button`
  display: block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 12px;
  border-color: transparent;
  border-radius: 8px;
  background: #dc3b5a;

  font-family: 'Right Grotesk';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.19;
  color: var(--color-dark-theme);
  text-transform: uppercase;

  transition: color var(--transition);

  &:hover {
    color: var(--color-light-theme);
  }

  @media screen and (min-width: 1280px) {
    padding-top: 16px;
    padding-bottom: 20px;

    font-size: 28px;
    line-height: 1.2;
  }
`;
