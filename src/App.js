import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import IndexPage from './pages';
import PokemonIndex from './pages/pokemon';
import DetailsPage from './pages/pokemon/details';
// api
import { getPokemon } from './api/pokemonAPI';
// components
import MainBar from './components/layout/MainBar';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <MainBar />
      <main className={styles['page-content']}>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/pokemon' element={<PokemonIndex />} />
          <Route path='/pokemon/:id' element={<DetailsPage />} />
          <Route path='*' element={<IndexPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
