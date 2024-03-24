import React from 'react';
import ArtsSwiper from '../../components/ArtsSwiper';
import { artsList } from '../../data/ArtsList';
import SectionTitle from '../../components/SectionTitle';
export interface IArtsProps {}

export default function Arts(props: IArtsProps) {
  return (
    <section className="arts" id="arts">
      <div className="container arts-wrapper">
        <SectionTitle text="COLLECTION" />
        <div>
          <ArtsSwiper artsList={artsList} />
        </div>
      </div>
    </section>
  );
}
