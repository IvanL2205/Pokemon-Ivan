import { LitElement, html, css } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './pokemon-list.css.js';
import '@cells-demo/demo-app-template/demo-app-template.js';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import '@bbva-experience-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js';
import '@bbva-experience-components/bbva-type-text/bbva-type-text.js';
import '@bbva-web-components/bbva-foundations-spinner/bbva-foundations-spinner.js';
import '@pokemones/pokemon-dm/pokemon-dm.js';

export class PokemonList extends LitElement {
  static get properties() {
    return {
      pokemonList: { type: Array },
      title: { type: String },
      loading: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.title = 'Lista de Pokemones';
    this.pokemonList = [];
    this.loading = false;
  }

  async firstUpdated() {
    const pokemonDm = this.shadowRoot.querySelector('pokemon-dm');
    this.pokemonList = await pokemonDm.fetchPokemonData();
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('PokemonList-shared-styles'),
      css`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          margin: 10px;
          overflow: hidden;
          width: 150px;
          text-align: center;
        }
        .card img {
          width: 100px;
        }
        .card p {
          font-size: 0.9em;
          color: #555;
          margin: 8px 0;
        }
        .card .pokemon-name {
          font-size: 1.2em;
          font-weight: bold;
          color: #333;
        }
      `,
    ];
  }

  handleDetails(id) {
    console.log(`Detalles del Pokémon con ID: ${id}`);
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <div class="container">
        ${this.pokemonList.map(
          (pokemon) => html`
            <div class="card">
              <img src="${pokemon.image}" alt="${pokemon.name}" />
              <p class="pokemon-name">${pokemon.name}</p>
              <p>${pokemon.abilities}</p>
              <bbva-button-default
                text="Details"
                @click="${() => this.handleDetails(pokemon.id)}">
              </bbva-button-default>
            </div>
          `
        )}
      </div>
      <pokemon-dm></pokemon-dm>
    `;
  }
}

