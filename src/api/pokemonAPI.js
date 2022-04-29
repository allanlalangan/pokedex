const getPokemon = async (page, previous, next) => {
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

const getPokemonPage = async () => {
  try {
    const pokemon = [];
    const resp = await fetch(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=15'
    );
    const data = await resp.json();
    const results = data.results;

    results.forEach((poke, i) => {
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        i + 1
      }.png`;
      const cardData = { id: i + 1, name: poke.name, url: poke.url, img };
      pokemon.push(cardData);
    });

    return pokemon;
  } catch (error) {
    console.log(error.message);
  }
};

const getPokemonDetails = async (pokemonID) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    const data = await resp.json();

    // const {
    //   id,
    //   name,
    //   types,
    //   sprites: {
    //     other: {
    //       'official-artwork': { front_default: image },
    //     },
    //   },
    // } = data;

    // const mutatedData = {
    //   id,
    //   name,
    //   types: types.map((type) => type.type.name),
    //   image,
    // };

    // return mutatedData;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export { getPokemon, getPokemonPage, getPokemonDetails };
