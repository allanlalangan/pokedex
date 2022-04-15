import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemon } from '../../api/pokemonAPI';

import PokemonCard from './PokemonCard/PokemonCard';
import styles from './PokemonList.module.css';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPokemon().then((pokemon) => setPokemon(pokemon));
  }, []);

  return (
    <ul className={styles['pokemon-list']}>
      {pokemon?.map(({ id, name, types, image }) => (
        <Link to={`/pokemon/${name}`}>
          <PokemonCard id={id} name={name} types={types} image={image} />
        </Link>
      ))}
    </ul>
  );
};
export default PokemonList;
