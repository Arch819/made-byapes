import React from 'react';
import sprite from '../../img/sprite.svg';
import { LogoStyle } from './Logo.styled';
import { smoothScrollToAnchor } from '../../utils/smoothScroll';

export interface ILogoProps {
  hoverColor: string;
}

export default function Logo(props: ILogoProps) {
  return (
    <LogoStyle
      href="#hero"
      onClick={smoothScrollToAnchor}
      $hoverColor={props.hoverColor}
      aria-label="logo link to #hero"
    >
      <svg className="icon-logo" width={48} height={32}>
        <use href={`${sprite}#icon-Logo`}></use>
      </svg>
    </LogoStyle>
  );
}
