import './Cards.css';
import arrowDown from '../../images/icons/arrowDown.svg';
import barbertonDaisy from '../../images/images/image-1.png';
import angelWingBegonia from '../../images/images/image-2.png';
import africanViolet from '../../images/images/image-3.png';
import beachSpiderLily from '../../images/images/image-4.png';
import blushingBromeliad from '../../images/images/image-5.png';
import alurminumPlant from '../../images/images/image-6.png';
import birdsNestForm from '../../images/images/image-7.png';
import broadleafLadyPalm from '../../images/images/image-8.png';
import chienseEvergreen from '../../images/images/image-9.png';
import { CardProduct } from '../CardProduct/CardProduct';
import { decorativePlants } from '../../utils/constants/decorative';

export function Cards() {
  return (
    <div className='cards'>
      <div className='cards__buttons-container'>
        <div className='cards__buttons'>
          <button className='cards__button hover__link'>Все растения</button>
          <button className='cards__button hover__link'>
            Новые поступления
          </button>
          <button className='cards__button hover__link'>Распродажа</button>
        </div>
        <p className='cards__text'>
          Сортировка по умолчанию
          <button className='cards__text-button hover__link'>
            <img
              className='cards__text-button-icon'
              src={arrowDown}
              alt='Стрелка вниз'
            ></img>
          </button>
        </p>
      </div>
      <ul className='cards__container'>
        {decorativePlants.map((card) => (
          <CardProduct card={card} key={card.name} />
        ))}
        {/* <li className='card'>
          <img
            className='card__image'
            src={angelWingBegonia}
            alt='Картинка'
          ></img>
          <p className='card__name'>Angel Wing Begonia</p>
          <p className='card__price'>$169.00</p>
        </li>
        <li className='card'>
          <img className='card__image' src={africanViolet} alt='Картинка'></img>
          <p className='card__name'>African Violet</p>
          <p className='card__price'>$199.00</p>
        </li>
        <li className='card'>
          <img
            className='card__image'
            src={beachSpiderLily}
            alt='Картинка'
          ></img>
          <p className='card__name'>Beach Spider Lily</p>
          <p className='card__price'>$129.00</p>
        </li>
        <li className='card'>
          <img
            className='card__image'
            src={blushingBromeliad}
            alt='Картинка'
          ></img>
          <p className='card__name'>Blushing Bromeliad</p>
          <p className='card__price'>$139.00</p>
        </li>
        <li className='card'>
          <img
            className='card__image'
            src={alurminumPlant}
            alt='Картинка'
          ></img>
          <p className='card__name'>Alurminum Plant</p>
          <p className='card__price'>$179.00</p>
        </li>
        <li className='card'>
          <img className='card__image' src={birdsNestForm} alt='Картинка'></img>
          <p className='card__name'>Bird's Nest Form</p>
          <p className='card__price'>$99.00</p>
        </li>
        <li className='card'>
          <img
            className='card__image'
            src={broadleafLadyPalm}
            alt='Картинка'
          ></img>
          <p className='card__name'>Broadleaf Lady Palm</p>
          <p className='card__price'>$59.00</p>
        </li>
        <li className='card'>
          <img
            className='card__image'
            src={chienseEvergreen}
            alt='Картинка'
          ></img>
          <p className='card__name'>Chiense Evergreen</p>
          <p className='card__price'>$39.00</p>
        </li> */}
      </ul>
    </div>
  );
}
