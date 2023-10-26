import './Newsletters.css';
import pinapple from '../../../images/images/pinapple.png';
import cactus from '../../../images/images/cactus.png';

export function Newsletters() {
  return (
    <div className='newsletters'>
      <ul className='newsletters__container'>
        <li className='newsletters__container-item'>
          <a
            className='newsletters__link'
            href='https://ld-spb.ru/vse-o-landshafte-i-sade/ukhod-za-sadom-vesnoj-letom-osenyu-zimoj'
            target='_blank'
            rel='noreferrer'
          >
            <img className='newsletters__image' src={pinapple} alt='Картинка' />
            <h2 className='newsletters__title'>Уход за садом</h2>
            <p className='newsletters__text'>
              Красивые, здоровые деревья, кустарники и цветы требуют регулярного
              внимания весной, летом, осенью, зимой.
            </p>
          </a>
        </li>
        <li className='newsletters__container-item'>
          <a
            className='newsletters__link'
            href='https://novate.ru/blogs/231220/57198/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='newsletters__image' src={cactus} alt='Картинка' />
            <h2 className='newsletters__title'>Забота о растениях</h2>
            <p className='newsletters__text'>
              8 лайфхаков, с которыми уход станет не просто эффективным, но и
              быстрым, приятным, максимально простым.
            </p>
          </a>
        </li>
        <li className='newsletters__container-item'>
          <a
            className='newsletters__link'
            href='https://www.ogorod.ru/ru/main/news/14869/Pravilny-poliv-ot-GARDENA.htm'
            target='_blank'
            rel='noreferrer'
          >
            <img className='newsletters__image' src={pinapple} alt='Картинка' />
            <h2 className='newsletters__title'>Полив сада</h2>
            <p className='newsletters__text'>
              Красота сада зависит от регулярного полива, ведь растения
              нуждаются в достаточном количестве воды для жизнедеятельности.
            </p>
          </a>
        </li>
      </ul>
      <div className='newsletters__add'>
        <h3 className='newsletters__add-title'>
          Хотели бы вы присоединиться к рассылке новостей?
        </h3>
        <form className='newsletters__form'>
          <input
            className='newsletters__input'
            type='email'
            placeholder='Введите ваш email'
          />
          <button className='newsletters__submit hover__link' type='submit'>
            Добавить
          </button>
        </form>
        <p className='newsletters__add-text'>
          Обычно мы публикуем предложения и проблемы в рассылке новостей. Мы -
          ваш онлайн-магазин комнатных растений. Мы предлагаем широкий
          ассортимент комнатных растений и аксессуаров, доставляемых
          непосредственно из нашего (зеленого) дома в ваш!
        </p>
      </div>
    </div>
  );
}
