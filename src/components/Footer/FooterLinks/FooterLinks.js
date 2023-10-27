import './FooterLinks.css';
import facebook from '../../../images/icons/facebook.svg';
import instagram from '../../../images/icons/instagram.svg';
import twitter from '../../../images/icons/twitter.svg';
import linkedin from '../../../images/icons/linkedin.svg';
import icon from '../../../images/icons/footerIcon.svg';
import paypal from '../../../images/icons/paypal.svg';
import mastercard from '../../../images/icons/mastercard.svg';
import visa from '../../../images/icons/visa.svg';
import americanExpress from '../../../images/icons/americanExpress.svg';

export function FooterLinks() {
  return (
    <div className='footer__links'>
      <div className='footer__links-item-container'>
        <h2 className='footer__links-title'>Мой аккаунт</h2>
        <ul className='footer__links-container'>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Мой аккаунт
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Наши истории
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Связаться с нами
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Карьера
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Специальные предложнеия
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__links-item-container'>
        <h2 className='footer__links-title'>Помощь и руководство</h2>
        <ul className='footer__links-container'>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Справочный центр
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Как купить
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Покупки и доставка
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Политика в отношении продукции
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Как вернуть
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__links-item-container'>
        <h2 className='footer__links-title'>Категории</h2>
        <ul className='footer__links-container'>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Комнатные растения
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Горшечные растения
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Семена
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Маленькие растения
            </a>
          </li>
          <li className='footer__links-container-item'>
            <a className='footer__links-item-link' href='#'>
              Аксессуары
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__links-info'>
        <h2 className='footer__links-info-title'>Социальные медиа</h2>
        <ul className='footer__icons'>
          <li className='footer__icons-item'>
            <img className='footer__icon' src={facebook} alt='Фейсбук' />
          </li>
          <li className='footer__icons-item'>
            <img className='footer__icon' src={instagram} alt='Инстаграм' />
          </li>
          <li className='footer__icons-item'>
            <img className='footer__icon' src={twitter} alt='Твиттер' />
          </li>
          <li className='footer__icons-item'>
            <img className='footer__icon' src={linkedin} alt='Линкедин' />
          </li>
          <li className='footer__icons-item'>
            <img className='footer__icon' src={icon} alt='Иконка' />
          </li>
        </ul>
        <div className='footer__links-icons-container'>
          <h2 className='footer__links-icons-title'>Мы принимаем</h2>
          <ul className='footer__links-icons'>
            <li className='footer__links-icons-item'>
              <img className='footer__links-icon' src={paypal} alt='Пэйпол' />
            </li>
            <li className='footer__links-icons-item'>
              <img
                className='footer__links-icon'
                src={mastercard}
                alt='Мастеркард'
              />
            </li>
            <li className='footer__links-icons-item'>
              <img className='footer__links-icon' src={visa} alt='Виза' />
            </li>
            <li className='footer__links-icons-item'>
              <img
                className='footer__links-icon'
                src={americanExpress}
                alt='Американ Экспресс'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
