import { Link } from 'react-router-dom';
import Nav from './Nav';
import styles from './MainBar.module.css';
import { BiHome } from 'react-icons/bi';
import { MdCatchingPokemon } from 'react-icons/md';

const MainBar = () => {
  return (
    <header className={styles['main-bar']}>
      <Link to='/'>
        <h1>
          <BiHome fontSize={'xx-large'} />
        </h1>
      </Link>
      <Link to='/pokemon'>
        <h2>
          <MdCatchingPokemon fontSize={'xx-large'} />
        </h2>
      </Link>
      <Nav />
    </header>
  );
};
export default MainBar;
