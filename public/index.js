/* eslint-disable no-new */
import MainAppComponent from "./js/components/MainAppComponent.js";

const pokemons = [
  { name: "pikachu" },
  { name: "bulbasur" },
  { name: "charizard" },
];

const { body } = document;

new MainAppComponent(body, pokemons);
