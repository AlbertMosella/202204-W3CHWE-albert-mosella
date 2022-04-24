import PokemonComponent from "./components/PokemonComponent.js";

const createPokemonComponent = (name, height, weight, image) => {
  const pokeList = document.querySelector(".pokemon-list");
  new PokemonComponent(pokeList, { name, height, weight, image });
};

const fetchPokemon = (name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((response) => response.json())
    .then((pokeData) => {
      createPokemonComponent(
        pokeData.name,
        pokeData.height,
        pokeData.weight,
        pokeData.sprites.other.dream_world.front_default
      );
    });
};

const fetchAllPokemons = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
    .then((response) => response.json())
    .then((jsonPokeList) => {
      jsonPokeList.results.forEach((pokemon) => {
        fetchPokemon(pokemon.name);
      });
    });
};

export default fetchAllPokemons;
