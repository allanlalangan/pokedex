import styles from './PokemonCard.module.css';

const PokemonCard = ({ id, name, types, image }) => {
  return (
    <li>
      <span>{id}</span>
      <p>{name}</p>
      <p>{types}</p>
      <div>
        <img src={image} alt={name} className={styles['card-image']} />
      </div>
    </li>
  );
};
export default PokemonCard;
