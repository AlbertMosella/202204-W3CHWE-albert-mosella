/* eslint-disable no-new */
import MainAppComponent from "./js/components/MainAppComponent.js";
import PokemonComponent from "./js/components/PokemonComponent.js";

const { body } = document;

new MainAppComponent(body);

const getPokemons = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  const pokeData = await response.json();
  return pokeData;
};

const allPokemons = [];

const getIndividualPokemonData = async () => {
  const pokemonList = await getPokemons();
  pokemonList.results.forEach(({ url }) => {
    const getPokemonsDetails = async (thisUrl) => {
      const pokemonsDetails = await fetch(thisUrl);
      const pokeDetails = await pokemonsDetails.json();
      allPokemons.push(pokeDetails);
      return pokeDetails;
    };
    getPokemonsDetails(url);
  });
  const pokemonsArray = await allPokemons;
  const myPokemons = document.querySelector(".pokemon-list");
  for (let i = 0; i < pokemonsArray.length; i++) {
    new PokemonComponent(myPokemons, pokemonsArray[i]);
  }
  /* pokemonsArray.forEach((pokemon) => {
    new PokemonComponent(myPokemons, pokemon);
  }); */
};
getIndividualPokemonData();
