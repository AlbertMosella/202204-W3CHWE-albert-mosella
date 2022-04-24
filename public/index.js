import MainAppComponent from "./js/components/MainAppComponent.js";
import fetchAllPokemons from "./js/pokemons.js";

const { body } = document;
new MainAppComponent(body);
fetchAllPokemons();
