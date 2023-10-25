import './Header.css';
import logo from '../../images/images/Logo.png';
import search from '../../images/icons/search.svg';
import basket from '../../images/icons/basket.png';
import Logout from '../../images/icons/Logout.svg';

export function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип'></img>
      <ul className='header__links'>
        <li className='header__links-item'>
          <a className='header__link hover__link' href='#'>
            Home
          </a>
        </li>
        <li className='header__links-item'>
          <a className='header__link hover__link' href='#'>
            Shop
          </a>
        </li>
        <li className='header__links-item'>
          <a className='header__link hover__link' href='#'>
            Plant Care
          </a>
        </li>
        <li className='header__links-item'>
          <a className='header__link hover__link' href='#'>
            Blogs
          </a>
        </li>
      </ul>
      <div className='header__buttons'>
        <button className='header__button-icon hover__link'>
          <img className='header__icon' src={search} alt='Поиск'></img>
        </button>
        <button className='header__button-icon hover__link'>
          <img className='header__icon' src={basket} alt='Корзина'></img>
        </button>
        <button className='header__button hover__link'>
          <img
            className='header__button-icon_type_logout'
            src={Logout}
            alt='Логин'
          ></img>
          Login
        </button>
      </div>
    </header>
  );
}
