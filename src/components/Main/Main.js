import './Main.css';
import flower from '../../images/images/flower.png';

export function Main() {
  return (
    <section className='main'>
      <div className='main__container'>
        <p className='main__text'>WELCOME TO GREENSHOP</p>
        <h1 className='main__title'>
          Let’s Make a Better&ensp;
          <span className='main__title_type_color_green'>Planet</span>
        </h1>
        <p className='main__subtitle'>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className='main__button hover__link'>SHOP NOW</button>
      </div>
      <img className='main__image' src={flower} alt='Картинка'></img>
    </section>
  );
}
