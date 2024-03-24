import { useContext, useEffect, useState } from 'react';
import {
  FaqItemImgBoxStyle,
  FaqItemStyle,
  FaqListStyle,
  FaqTextContentStyle,
} from './FaqList.styled';
import { MobileWidth } from '../App';

type FaqItemProps = {
  title: string;
  text: string;
  img: string[];
  alt: string;
};

export interface IFaqListProps {
  array: Array<FaqItemProps>;
}

export default function FaqList({ array }: IFaqListProps) {
  const [indexOpenItem, setIndexOpenItem] = useState<number>(0);
  const isMobileWidth = useContext(MobileWidth);

  return (
    <FaqListStyle>
      {array.map((item, i) => (
        <FaqItemStyle
          key={i}
          className={i === indexOpenItem ? 'open' : ''}
          onClick={() => setIndexOpenItem(i)}
        >
          <div>
            <FaqItemImgBoxStyle
              className={
                isMobileWidth || i !== indexOpenItem ? 'visibility-hidden' : ''
              }
            >
              <img
                srcSet={`${item.img[0]} 1x, ${item.img[1]} 2x`}
                src={item.img[0]}
                alt={item.alt}
                width={182}
                height={182}
              />
            </FaqItemImgBoxStyle>
          </div>
          <FaqTextContentStyle>
            <p className="item-index">[ {i + 1} ]</p>
            <div>
              <h3 className="title">{item.title}</h3>
              <p className="description">{item.text}</p>
            </div>
          </FaqTextContentStyle>
        </FaqItemStyle>
      ))}
    </FaqListStyle>
  );
}
