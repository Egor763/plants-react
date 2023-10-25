import './Plants.css';
import flower from '../../images/images/flower.png';

export function Plants() {
  return (
    <section className='plants'>
      <div className='plants__container'>
        <p className='plants__text'>WELCOME TO GREENSHOP</p>
        <h2 className='plants__title'>
          Let’s Make a Better&ensp;
          <span className='plants__title_type_color_green'>Planet</span>
        </h2>
        <p className='plants__subtitle'>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className='plants__button hover__link'>SHOP NOW</button>
      </div>
      <img className='plants__image' src={flower} alt='Картинка'></img>
    </section>
  );
}
