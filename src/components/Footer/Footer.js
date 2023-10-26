import './Footer.css';
import { Newsletters } from './Newsletters/Newsletters';
import { FooterContacts } from './FooterContacts/FooterContacts';
import { FooterLinks } from './FooterLinks/FooterLinks';

export function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Newsletters />
      <FooterContacts />
      <FooterLinks />
      <p className='footer__copyright'>© {date} GreenShop</p>
    </footer>
  );
}
