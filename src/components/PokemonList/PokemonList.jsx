import { Link, useNavigate } from 'react-router-dom';

import PokemonCard from '../PokemonCard/PokemonCard';
import styles from './PokemonList.module.css';

const PokemonList = ({ pokemon }) => {
  return (
    <ul className={styles['pokemon-list']}>
      {pokemon?.map(({ name, url, img }, i) => (
        <Link key={i} to={`/pokemon/${i + 1}/`}>
          <PokemonCard id={i + 1} name={name} url={url} img={img} />
        </Link>
      ))}
    </ul>
  );
};
export default PokemonList;
