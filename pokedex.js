const pokedex = document.querySelector('.container');

const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const proms = []
    for (let i = 1; i <= 151; i++) {
        const prom = fetch(`${url}${i}`).then(res => res.json());
        proms.push(prom)
    }
    
    Promise.all(proms).then((pokedata) => {
        pokedata.forEach(poke => {
            poke.map(pokemon => {

            })
        })
    });

}

fetchPokemon()


// const createCard = (pokemon) => {
//     return (
//         <div class="card">
//                 <p class="id">pokemon.id</p>
//                 <h3>pokemon.name</h3>
//                 <div class="img-container">
//                     <img src="pokemon.sprites.other.home[front_default]" alt="">
//                 </div>
//                 <p class="poke-type">Types: pokemon.types.type.name</p>
//                 <p class="height">Height: pokemon.height</p>
//                 <p class="weight">Weight: pokemon.weight</p>
//         </div>
//     )
// }



