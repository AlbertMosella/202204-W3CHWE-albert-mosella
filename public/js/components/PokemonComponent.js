import Component from "./Component.js";

class PokemonComponent extends Component {
  pokemon;

  constructor(parentElement, { name, height, weight, image }) {
    super(parentElement, "li", "pokemon-card");
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.image = image;
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <img
        class="pokemon-picture"
        src="${this.image}"
        alt="El pokemon ${this.name}"
      />
      <div class="pokemon-info">
        <h4 class="pokemon-name">${this.name}</h4>
        <p class="pokemon-info">Altura: ${this.height}0 cm</p>
        <p class="pokemon-info">Peso: ${this.weight} kg</p>
      </div>
      `;
  }
}

export default PokemonComponent;
