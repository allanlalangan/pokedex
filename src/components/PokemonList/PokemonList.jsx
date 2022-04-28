import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPokemon } from '../../api/pokemonAPI';

import PokemonCard from '../PokemonCard/PokemonCard';
import styles from './PokemonList.module.css';

const PokemonList = ({ pokemon }) => {
  return (
    <ul className={styles['pokemon-list']}>
      {pokemon?.map(({ name, url }, i) => (
        <Link key={i} to={`/pokemon/${name}`}>
          <PokemonCard id={i + 1} name={name} url={url} />
        </Link>
      ))}
    </ul>
  );
};
export default PokemonList;
