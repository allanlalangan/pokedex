import styles from './PokemonCard.module.css';

const PokemonCard = ({ id, name, types, image }) => {
  return (
    <li key={id} className={styles['pokemon-card']}>
      <div className={styles['pokemon-details']}>
        <span className={styles.id}>{id}</span>
        <p className={styles.name}>{name}</p>
        <ul className={styles['types-list']}>
          {types.map((type) => (
            <li
              className={`${styles['type-chip']} ${
                styles[type + '-chip'] ? styles[type + '-chip'] : ''
              }`}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={image}
        alt={name}
        className={`${styles['id-' + id + '-image-fix']} ${
          styles['card-image']
        }`}
      />
    </li>
  );
};
export default PokemonCard;
