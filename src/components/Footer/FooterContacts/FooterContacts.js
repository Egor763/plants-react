import './FooterContacts.css';
import logo from '../../../images/images/Logo.png';
import location from '../../../images/icons/Location.svg';
import message from '../../../images/icons/Message.svg';
import calling from '../../../images/icons/Calling.svg';

export function FooterContacts() {
  return (
    <div className='contacts'>
      <img className='contacts__logo' src={logo} alt='Логотип' />
      <p className='contacts__text'>
        <img
          className='contacts__text-icon'
          src={location}
          alt='Местоположение'
        />
        Самара, ул. Лесная 23
      </p>
      <p className='contacts__text'>
        <img className='contacts__text-icon' src={message} alt='Email' />
        contact@greenshop.com
      </p>
      <p className='contacts__text'>
        <img className='contacts__text-icon' src={calling} alt='Телефон' />
        +88 01911 717 490
      </p>
    </div>
  );
}
