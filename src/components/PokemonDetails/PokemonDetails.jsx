import styles from './PokemonDetails.module.css';

const PokemonDetails = (props) => {
  return (
    <section>
      <h2 className={styles['details-heading']}>{props.name}</h2>
    </section>
  );
};
export default PokemonDetails;
