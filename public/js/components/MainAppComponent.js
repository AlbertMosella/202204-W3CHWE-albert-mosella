/* eslint-disable no-new */
import Component from "./Component.js";
import PokemonComponent from "./PokemonComponent.js";

class MainAppComponent extends Component {
  pokemons;

  constructor(parentElement, pokemons) {
    super(parentElement, "div", "container");
    this.pokemons = pokemons;
    this.render();
    this.showPokemons();
  }

  render() {
    this.element.innerHTML = `<header class="main-header">
        <h1 class="main-title">My Pokemon</h1>
      </header>
      <main class="main">
        <section class="pokemons">
          <h2 class="section-title">Pokemons list</h2>
          <ul class="pokemon-list">
            
          </ul>
        </section>
      </main>`;
  }

  showPokemons() {
    const myPokemons = document.querySelector(".pokemon-list");

    this.pokemons.forEach((pokemon) => {
      new PokemonComponent(myPokemons, { ...pokemon });
    });
  }
}

export default MainAppComponent;
