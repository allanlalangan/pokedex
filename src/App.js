import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Index_page from './pages';
import Pokemon_index from './pages/pokemon';
import Pokemon_details from './pages/pokemon/details';
// api
import { getPokemon } from './api/pokemonAPI';
// components
import MainBar from './components/layout/MainBar';
import PokemonDetails from './pages/pokemon/details';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <MainBar />
      <main className={styles['page-content']}>
        <Routes>
          <Route path='/' element={<Index_page />} />
          <Route path='/pokemon' element={<Pokemon_index />}></Route>
          <Route path='/pokemon/:pokemon' element={<Pokemon_details />} />
          <Route path='*' element={<Index_page />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
