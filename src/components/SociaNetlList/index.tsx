import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import { SocialNetLinkStyle, SocialNetListStyle } from './SocialNetList.styled';
import DialogComponent from '../Dialog';

const socialNetArray = [
  {
    href: 'https://discord.com',
    ariaLabel: 'link to discord',
    iconName: 'icon-discord',
  },
  {
    href: 'https://ship-art.com',
    ariaLabel: 'link to some social network',
    iconName: 'icon-ship',
  },
  {
    href: 'https://twitter.com',
    ariaLabel: 'link to twitter',
    iconName: 'icon-x-logo',
  },
];

export interface ISociaNetlListProps {
  hoverColor: string;
  themeDark: boolean;
}

export default function SociaNetlList(props: ISociaNetlListProps) {
  const [confirmLink, setConfirmLink] = useState(false);
  const [pathLink, setPathLink] = useState('');

  const handleClickSoc = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const path = target.getAttribute('href');
    if (path) {
      setPathLink(path);
      setConfirmLink(true);
    }
  };

  const toOutside = (link: string) => {
    window.open(link, '_blank');
    setConfirmLink(false);
  };
  return (
    <SocialNetListStyle>
      {socialNetArray.map(({ href, ariaLabel, iconName }) => (
        <li key={href}>
          <SocialNetLinkStyle
            href={href}
            onClick={handleClickSoc}
            aria-label={ariaLabel}
            $hoverColor={props.hoverColor}
            $themeDark={props.themeDark}
          >
            <svg className="icon" width={16} height={16}>
              <use href={`${sprite}#${iconName}`}></use>
            </svg>
          </SocialNetLinkStyle>
        </li>
      ))}
      {confirmLink && (
        <DialogComponent
          open={confirmLink}
          handleClose={() => setConfirmLink(false)}
          agreeFun={() => toOutside(pathLink)}
          title="This address leads to another website. Are you sure you want to navigate to this link?"
          action
          zIndex="1500"
        />
      )}
    </SocialNetListStyle>
  );
}
