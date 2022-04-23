/* eslint-disable no-new */
import MainAppComponent from "./js/components/MainAppComponent.js";

const pokemons = [
  { name: "pikachu" },
  { name: "bulbasur" },
  { name: "charizard" },
];
const { body } = document;

new MainAppComponent(body, pokemons);

const getPokemons = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  const finalPokeData = await response.json();
  return finalPokeData;
};

const allPokemons = [];

const getIndividualPokemonData = async () => {
  const pokemonList = await getPokemons();
  pokemonList.results.forEach(({ url }) => {
    const getPokemonsDetails = async (thisUrl) => {
      const pokemonsDetails = await fetch(thisUrl);
      const pokeDetails = await pokemonsDetails.json();
      /*  console.log(pokeDetails); */
      return pokeDetails;
    };

    allPokemons.push(getPokemonsDetails(url));
  });
  /* console.log(allPokemons); */
};
getIndividualPokemonData();
