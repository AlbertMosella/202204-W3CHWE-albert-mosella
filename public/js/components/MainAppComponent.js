import Component from "./Component.js";

class MainAppComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "div", "container");
    this.render();
  }

  render() {
    this.element.innerHTML = `<header class="main-header">
        <h1 class="main-title"><img
          class="pokemon-logo"
          src="images/pokelogo.png"
          alt="Pokemon logo"
      /></h1>
      </header>
      <nav class="navigation-menu">
      <a href="">All Pokemons</a>
      <a href="">My Pokemon</a>
      <a href="">Pokemon Details</a>
      </nav>
      <main class="main">
        <section class="pokemons"> 
          <ul class="pokemon-list">
            
          </ul>
        </section>
      </main>`;
  }
}

export default MainAppComponent;
