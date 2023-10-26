import './Sidebar.css';
import image from '../../images/images/Group 106.png';
import superSale from '../../images/images/Super Sale Banner.png';

export function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__categories'>
        <h2 className='sidebar__categories-title'>Категории</h2>
        <ul className='sidebar__categories-links'>
          <li className='sidebar__categories-links-item'>
            <a className='sidebar__categories-link' href='#'>
              Декоративные растения
              <span className='sidebar__categories-number'>33</span>
            </a>
          </li>
          <li className='sidebar__categories-links-item'>
            <a className='sidebar__categories-link' href='#'>
              Красиво-цветущие растения
              <span className='sidebar__categories-number'>12</span>
            </a>
          </li>
          <li className='sidebar__categories-links-item'>
            <a className='sidebar__categories-link' href='#'>
              Кактусы
              <span className='sidebar__categories-number'>65</span>
            </a>
          </li>
          <li className='sidebar__categories-links-item'>
            <a className='sidebar__categories-link' href='#'>
              Орхидеи
              <span className='sidebar__categories-number'>23</span>
            </a>
          </li>
          <li className='sidebar__categories-links-item'>
            <a className='sidebar__categories-link' href='#'>
              Аксэссуары
              <span className='sidebar__categories-number'>18</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='sidebar__range'>
        <div className='sidebar__range-container'>
          <img className='sidebar__range-image' src={image} alt='Бегунок'></img>
        </div>
      </div>
      <div className='sidebar__size'>
        <h2 className='sidebar__size-title'>Размер</h2>
        <ul className='sidebar__size-links'>
          <li className='sidebar__size-links-item'>
            <a className='sidebar__size-link' href='#'>
              Маленький
            </a>
          </li>
          <li className='sidebar__size-links-item'>
            <a className='sidebar__size-link' href='#'>
              Средний
            </a>
          </li>
          <li className='sidebar__size-links-item'>
            <a className='sidebar__size-link' href='#'>
              Большой
            </a>
          </li>
        </ul>
      </div>
      <img className='sidebar__image' src={superSale} alt='Картинка'></img>
    </div>
  );
}
