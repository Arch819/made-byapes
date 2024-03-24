import RunningLine from '../../components/RunningLine';
import AboutTextContent from '../../components/AboutTextContant';
import { AboutWrapperStyle, RunningLineBoxStyle } from './About.styled';

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <section className="about" id="about">
      <AboutWrapperStyle className="container about-wrapper">
        <AboutTextContent />
        <RunningLineBoxStyle>
          <RunningLine />
          <RunningLine />
        </RunningLineBoxStyle>
      </AboutWrapperStyle>
    </section>
  );
}
