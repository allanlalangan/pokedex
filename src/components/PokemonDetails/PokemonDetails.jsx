import styles from './PokemonDetails.module.css';

const PokemonDetails = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <section>
      <h2 className={styles['details-heading']}>{pokemon.name}</h2>
    </section>
  );
};
export default PokemonDetails;
