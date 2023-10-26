import './CardProduct.css';

export function CardProduct(props) {
  const { card } = props;
  return (
    <li className='card'>
      <img className='card__image' src={card.image} alt={card.name}></img>
      <p className='card__name'>{card.name}</p>
      <p className='card__price'>{card.price}&#8381;</p>
    </li>
  );
}
