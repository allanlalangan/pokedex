import React, { useState, useEffect } from 'react';
// hooks
import useRequest from '../../hooks/useRequest';
// components
import PokemonList from '../../components/PokemonList/PokemonList';

const PokemonIndex = () => {
  const [pokemon, setPokemon] = useState([]);

  return (
    <section>
      <h2>All Pokemon</h2>
      <PokemonList />
    </section>
  );
};
export default PokemonIndex;
