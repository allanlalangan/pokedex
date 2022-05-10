import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../api/pokemonAPI';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';

const DetailsPage = () => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPokemonDetails(id).then((data) => {
      setPokemonDetails(data);
    });
  }, []);

  return (
    <>
      <PokemonDetails pokemon={pokemonDetails} id={id} />
    </>
  );
};
export default DetailsPage;
