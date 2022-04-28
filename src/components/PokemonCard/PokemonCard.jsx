import styles from './PokemonCard.module.css';

const PokemonCard = ({ id, name, img }) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <li className={styles['pokemon-card']}>
      <div className={styles['pokemon-details']}>
        <div className={styles['pokemon-id']}>
          <p className={styles.id}>{id}</p>
          <p className={styles.name}>{name}</p>
        </div>
      </div>
      <img
        src={img}
        alt={name}
        className={`${styles['id-' + id + '-image-fix']} ${
          styles['card-image']
        }`}
      />
    </li>
  );
};
export default PokemonCard;
