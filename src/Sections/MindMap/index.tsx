import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import MindMapList from '../../components/MindMapList/TabletDesktop';
import MindMapMobile from '../../components/MindMapList/Mobile';
import { MobileWidth } from '../../components/App';

export interface IMindMapProps {}

export default function MindMap(props: IMindMapProps) {
  const isMobileWidth = useContext(MobileWidth);

  return (
    <section className="mind-map" id="mind-map">
      <div className="container mind-map-wrapper">
        <SectionTitle text="MIND map" />
        {isMobileWidth ? <MindMapMobile /> : <MindMapList />}
      </div>
    </section>
  );
}
