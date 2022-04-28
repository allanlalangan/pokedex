import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../api/pokemonAPI';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';

const DetailsPage = () => {
  const { pokemon } = useParams();
  console.log(pokemon);

  return (
    <>
      <PokemonDetails name={pokemon} />
    </>
  );
};
export default DetailsPage;
