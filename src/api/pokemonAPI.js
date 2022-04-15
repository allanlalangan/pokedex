const getPokemon = async () => {
  try {
    const pokemon = [];
    for (let i = 1; i < 10; i++) {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await resp.json();

      const {
        id,
        name,
        types,
        sprites: {
          other: {
            'official-artwork': { front_default: image },
          },
        },
      } = data;

      const mutatedData = {
        id,
        name,
        types: types.map((type) => type.type.name),
        image,
      };

      pokemon.push(mutatedData);
    }
    return pokemon;
  } catch (error) {
    console.log(error.message);
  }
};

const getPokemonDetails = async (id) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await resp.json();
    console.log(data);
  } catch (error) {}
};

const getPokemonImage = async (id, imageType) => {};

export { getPokemon, getPokemonDetails, getPokemonImage };
