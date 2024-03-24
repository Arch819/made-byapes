import SectionTitle from '../../components/SectionTitle';
import FaqList from '../../components/FaqList';
import { faqArray } from '../../data/FaqList';

export interface IFaqProps {}

export default function Faq(props: IFaqProps) {
  return (
    <section className="faq" id="faq">
      <div className="container faq-wrapper">
        <SectionTitle text="faq" />
        <FaqList array={faqArray} />
      </div>
    </section>
  );
}
