import styles from './PokemonCard.module.css';

const PokemonCard = ({ id, name }) => {
  return (
    <li className={styles['pokemon-card']}>
      <div className={styles['pokemon-details']}>
        <div className={styles['pokemon-id']}>
          <p className={styles.id}>{id}</p>
          <p className={styles.name}>{name}</p>
        </div>
        {/* <ul className={styles['types-list']}>
          {types.map((type, i) => (
            <li
              key={i}
              className={`${styles['type-chip']} ${
                styles[type + '-chip'] ? styles[type + '-chip'] : ''
              }`}
            >
              {type}
            </li>
          ))}
        </ul> */}
      </div>
      {/* <img
        src={image}
        alt={name}
        className={`${styles['id-' + id + '-image-fix']} ${
          styles['card-image']
        }`}
      /> */}
    </li>
  );
};
export default PokemonCard;
