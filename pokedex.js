const pokedex = document.getElementById('container');

const createCard = (pokemon) => {
    const { id, name, sprites: {other: {home: {front_default: image}}}, types, height, weight } = pokemon;
    return (
        `<div class="card">
                <aside class="poke-detail id">${id}</aside>
                <h3 class="poke-detail name">${name}</h3>
                <div class="img-container">
                    <img src="${image}" alt="image of ${name}">
                </div>
                <div class="poke-detail type">Types: ${types.map(type => type.type.name).join(', ')}</div>
                <div class="poke-detail height">Height: ${height}</div>
                <div class="poke-detail weight">Weight: ${weight}</div>
        </div>
        `
    )
}

const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const proms = []
    for (let i = 1; i <= 9; i++) {
        const prom = fetch(`${url}${i}`).then(res => res.json());
        proms.push(prom)
    }
    
    Promise.all(proms).then((pokedata) => {
        pokedata.forEach(pokemon => {
            console.log(pokemon)
            pokedex.insertAdjacentHTML("beforeend", createCard(pokemon));
        })
    });

}

fetchPokemon();