import './Footer.css';
import { Newsletters } from './Newsletters/Newsletters';
import { FooterInfo } from './FooterInfo/FooterInfo';

export function Footer() {
  return (
    <footer className='footer'>
      <Newsletters />
      <FooterInfo />
    </footer>
  );
}
