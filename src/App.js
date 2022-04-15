import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages';
import Pokemon from './pages/pokemon';
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
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/pokemon/:id' element={<Pokemon />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
