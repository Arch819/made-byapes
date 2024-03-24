import { MenuContainerStyle, NavLinkStyle, NavListStyle } from './MobileMenu';
import Footer from '../Footer';
import { smoothScrollToAnchor } from '../../utils/smoothScroll';
import { DialogContent } from '@mui/material';

type linkObject = {
  href: string;
  text: string;
  className: string;
};

export interface IMobileMenuProps {
  handleClose(): void;
  navLinkList: linkObject[];
}

export default function MobileMenu({
  navLinkList,
  handleClose,
}: IMobileMenuProps) {
  return (
    <DialogContent sx={MenuContainerStyle}>
      <div className="container">
        <NavListStyle>
          {navLinkList.map(link => (
            <li key={link.href}>
              <NavLinkStyle
                href={link.href}
                className={link.className}
                onClick={e => smoothScrollToAnchor(e, handleClose)}
              >
                {link.text}
              </NavLinkStyle>
            </li>
          ))}
        </NavListStyle>
      </div>
      <Footer />
    </DialogContent>
  );
}
