import React from 'react';
import { CopyrightTextStyle, FooterWrapperStyle } from './Footer.styled';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer>
      <FooterWrapperStyle className="container">
        <CopyrightTextStyle>
          &#169; Yacht ape 2024 all rights reserved
        </CopyrightTextStyle>
      </FooterWrapperStyle>
    </footer>
  );
}
