import { useContext, useEffect, useState } from 'react';
import {
  BtnOpenMenuStyle,
  BurgerMenuBoxStyle,
  NavigationItemStyle,
  NavigationListStyle,
} from './BurgerMenu.styled';
import { smoothScrollToAnchor } from '../../utils/smoothScroll';
import { MobileWidth } from '../App';
import { NavLinkListProps } from '../Header';

export interface IBurgerMenuProps {
  hoverColor: string;
  openMobileMenu(): void;
  navLinkList: NavLinkListProps[];
  isOpenMobileMenu: boolean;
  themeDark: boolean;
}

export function BurgerMenu(props: IBurgerMenuProps) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const isMobileWidth = useContext(MobileWidth);

  const handleToggle = () => {
    if (isMobileWidth) {
      return props.openMobileMenu();
    }
    setIsOpenMenu(prev => !prev);
  };

  return (
    <BurgerMenuBoxStyle>
      <BtnOpenMenuStyle
        as={'button'}
        onClick={handleToggle}
        $isOpen={isOpenMenu}
        $hoverColor={props.hoverColor}
        $themeDark={props.themeDark}
      >
        {isOpenMenu || props.isOpenMobileMenu ? 'CLOSE' : 'MENU'}
      </BtnOpenMenuStyle>
      {!isMobileWidth && (
        <NavigationListStyle
          className={isOpenMenu ? 'open' : ''}
          $themeDark={props.themeDark}
        >
          {props.navLinkList.map(link => (
            <li key={link.href} onClick={() => setIsOpenMenu(false)}>
              <NavigationItemStyle
                href={link.href}
                className={link.className}
                onClick={e => smoothScrollToAnchor(e)}
                $hoverColor={props.hoverColor}
              >
                {link.text}
              </NavigationItemStyle>
            </li>
          ))}
        </NavigationListStyle>
      )}
    </BurgerMenuBoxStyle>
  );
}
