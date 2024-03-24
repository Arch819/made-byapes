import React from 'react';
import sprite from '../../img/sprite.svg';
import { RunningLineItem, RunningLineListStyle } from './RunningLine.styled';

export interface IRunningLineProps {}

export default function RunningLine(props: IRunningLineProps) {


  return (
    <RunningLineListStyle id="myLine">
      <RunningLineItem>
        <p className="text">Destroy stereotypes</p>
        <svg className="icon" width={36} height={36} fill="#fff">
          <use href={`${sprite}#icon-x`}></use>
        </svg>
      </RunningLineItem>
      <RunningLineItem>
        <p className="text">HAVE NO LIMITS</p>
        <svg className="icon" width={36} height={36} fill="#fff">
          <use href={`${sprite}#icon-x`}></use>
        </svg>
      </RunningLineItem>
      <RunningLineItem>
        <p className="text">Break rules</p>
        <svg className="icon" width={36} height={36} fill="#fff">
          <use href={`${sprite}#icon-x`}></use>
        </svg>
      </RunningLineItem>
    </RunningLineListStyle>
  );
}
