import React, { useContext, useEffect, useState } from 'react';
import DialogComponent from '../Dialog';
import MobileMenu from '../MobileMenu';
import Logo from '../Logo';
import { BurgerMenu } from '../BurgerMenu';
import SociaNetlList from '../SociaNetlList';
import {
  FixedBlockStyled,
  HeaderContainerStyle,
  HeaderStyle,
  NavigationPanelStyle,
} from './Header.styled';
import { MobileWidth } from '../App';

export interface NavLinkListProps {
  href: string;
  className: string;
  text: string;
}

const navLinkList: NavLinkListProps[] = [
  {
    href: '#about',
    className: 'link',
    text: 'ABOUT',
  },
  {
    href: '#mind-map',
    className: 'link',
    text: 'M-map',
  },
  {
    href: '#faq',
    className: 'link',
    text: 'Faq',
  },
  {
    href: '#arts',
    className: 'link',
    text: 'ARTS',
  },
  {
    href: '#mint',
    className: 'link',
    text: 'MINT',
  },
];

export interface IHeaderProps {
  themeDark: boolean | null;
}

export function Header(props: IHeaderProps) {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [hoverColor, setHoverColor] = useState('#ffffff');
  const isMobileWidth = useContext(MobileWidth);

  useEffect(() => {
    if (!props.themeDark) {
      return setHoverColor('#ffffff');
    }
    setHoverColor('#dc3d5a');
  }, [props.themeDark]);

  const handleClose = () => {
    setOpenMobileMenu(false);
  };

  return (
    <HeaderStyle
      $themeDark={Boolean(!props.themeDark) && !openMobileMenu}
      $mobileMenu={openMobileMenu}
    >
      <HeaderContainerStyle className="container">
        <Logo hoverColor={hoverColor} />
        <FixedBlockStyled>
          <NavigationPanelStyle $isScroll={false}>
            <BurgerMenu
              isOpenMobileMenu={openMobileMenu}
              navLinkList={navLinkList}
              hoverColor={hoverColor}
              themeDark={Boolean(!props.themeDark) && !openMobileMenu}
              openMobileMenu={() => setOpenMobileMenu(prev => !prev)}
            />
            <SociaNetlList
              hoverColor={hoverColor}
              themeDark={Boolean(!props.themeDark) && !openMobileMenu}
            />
          </NavigationPanelStyle>
        </FixedBlockStyled>
      </HeaderContainerStyle>
      {isMobileWidth && (
        <DialogComponent
          open={openMobileMenu}
          handleClose={handleClose}
          fullScreen={true}
        >
          <MobileMenu navLinkList={navLinkList} handleClose={handleClose} />
        </DialogComponent>
      )}
    </HeaderStyle>
  );
}
