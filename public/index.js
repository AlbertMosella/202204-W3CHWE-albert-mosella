/* eslint-disable no-new */
import MainAppComponent from "./js/components/MainAppComponent.js";
import PokemonComponent from "./js/components/PokemonComponent.js";

const { body } = document;

new MainAppComponent(body);

const createPokemonComponent = (name, height, weight) => {
  const pokeList = document.querySelector(".pokemon-list");
  new PokemonComponent(pokeList, { name, height, weight });
};

const fetchPokemon = (name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((response) => response.json())
    .then((pokeData) => {
      createPokemonComponent(pokeData.name, pokeData.height, pokeData.weight);
    });
};

fetchPokemon(9);

const fetchAllPokemons = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
    .then((response) => response.json())
    .then((jsonPokeList) => {
      console.log(jsonPokeList);
      jsonPokeList.results.forEach((pokemon) => {
        fetchPokemon(pokemon.name);
      });
    });
};
fetchAllPokemons();
