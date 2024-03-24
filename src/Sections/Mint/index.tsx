import React from 'react';
import sprite from '../../img/sprite.svg';
import MintForm from '../../components/Form/MintForm';
import { CrossMarkIconStyle, MintTopTextStyle } from './Mint.styled';
import SectionTitle from '../../components/SectionTitle';

export interface IMintProps {}

export default function Mint(props: IMintProps) {
  return (
    <section className="mint" id="mint">
      <div className="container mint-wrapper">
        <SectionTitle text="Are you in?" />
        <CrossMarkIconStyle width={36} height={36} fill="#fff">
          <use href={`${sprite}#icon-x`}></use>
        </CrossMarkIconStyle>
        <MintTopTextStyle>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </MintTopTextStyle>
        <MintForm />
      </div>
    </section>
  );
}
