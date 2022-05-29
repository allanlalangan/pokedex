const getAllPokemonDetails = async (page, previous, next) => {
  try {
    const pokemon = [];

    for (let i = 1; i <= 15; i++) {
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

const getPokemonDetails = async (pokemonID) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
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

    return mutatedData;
  } catch (error) {
    console.log(error.message);
  }
};

const getPokemonPage = async () => {
  try {
    const resp = await fetch(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=15'
    );
    const data = await resp.json();
    const results = data.results;

    return results;
  } catch (error) {
    console.log(error.message);
  }
};

export { getAllPokemonDetails, getPokemonPage, getPokemonDetails };
