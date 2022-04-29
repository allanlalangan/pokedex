import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../api/pokemonAPI';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';

const DetailsPage = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getPokemonDetails(id).then((data) => console.log(data));
  }, []);

  return (
    <>
      <PokemonDetails id={id} />
    </>
  );
};
export default DetailsPage;
