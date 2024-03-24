import React from 'react';
import sprite from '../../img/sprite.svg';
import { MindMapItemStyle, MindMapListStyle } from './MindMap.styled';

export interface IMindMapListProps {}

export default function MindMapList(props: IMindMapListProps) {
  return (
    <MindMapListStyle>
      <MindMapItemStyle>
        <p className="top-text">
          All owners of APE NFTs and all future collections will receive a
          percentage of sales based on the number of NFTs they own
        </p>
        <h3 className="title">YAPE DROP</h3>
      </MindMapItemStyle>
      <MindMapItemStyle>
        <p className="top-text">
          Launch of the 2nd YACHT Collection Releasing the first version of the
          Ape Slam Game
        </p>
        <h3 className="title">New Collection</h3>
      </MindMapItemStyle>
      <MindMapItemStyle>
        <p className="top-text">
          Launch your own token, the proceeds of which will go to a global fund
          to LAUNCH YACHT CLUB AND PROMOTE it
        </p>
        <h3 className="title">Token</h3>
      </MindMapItemStyle>
      <li className="link-more-box">
        <MindMapItemStyle as="a" href="#" className="link">
          <span className="top-text link-icon">
            <svg width={24} height={24} fill="#fff">
              <use href={`${sprite}#icon-up-left-arrow`}></use>
            </svg>
          </span>
          <h3 className="title">
            Learn
            <br /> more
            <br /> in mind map
          </h3>
        </MindMapItemStyle>
      </li>
    </MindMapListStyle>
  );
}
