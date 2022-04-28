import React, { useState, useEffect } from 'react';
import { getPokemon, getPokemonPage } from '../../api/pokemonAPI';
import PokemonList from '../../components/PokemonList/PokemonList';

const PokemonIndex = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPokemonPage().then((data) => {
      setPokemon(data);
      setIsLoading(false);
      setIsSuccess(true);
    });
  }, []);

  return (
    <section>
      <h2>Kanto Region</h2>
      <PokemonList pokemon={pokemon} />
    </section>
  );
};
export default PokemonIndex;
