import Component from "./Component.js";

class PokemonComponent extends Component {
  name;

  constructor(parentElement, { name }) {
    super(parentElement, "li", "pokemon-card");
    this.name = name;
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <img
        class="pokemon-picture"
        src=""
        alt="${this.name}"
      />
      <h4 class="pokemon-name">${this.name}</h4>
      <p class="pokemon-info">Aqui un puto Pikachu</p>
      `;
  }
}

export default PokemonComponent;
