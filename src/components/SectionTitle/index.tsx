import * as React from 'react';
import { SectionTitleStyle } from './SectionTitle.styled';

export interface ISectionTitleProps {
  text: string;
}

export default function SectionTitle(props: ISectionTitleProps) {
  return <SectionTitleStyle>{props.text}</SectionTitleStyle>;
}
