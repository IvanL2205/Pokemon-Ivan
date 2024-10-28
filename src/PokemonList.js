import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './pokemon-list.css.js';
import '@cells-demo/demo-app-template/demo-app-template.js';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import '@bbva-experience-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js';
import '@bbva-experience-components/bbva-type-text/bbva-type-text.js';
import '@bbva-web-components/bbva-foundations-spinner/bbva-foundations-spinner.js';
import '@pokemones/pokemon-dm/pokemon-dm.js'

export class PokemonList extends LitElement {
  static get properties() {
    return {
      pokemonList: { type: Array },
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Lista Pokemones';
    this.pokemonList = [];
    this.loading = false; 
  }

  async firstUpdated(){
    const pokemonDm = this.shadowRoot.querySelector('pokemon-dm');
    this.pokemon = await pokemonDm.fetchPokemon();
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('pokemon-list-shared-styles'),
    ];
  }

  

  render() {
    return html`
      <div class="content">
        ${this.loading
          ? html`
              <div class="spinner">
                <bbva-foundations-spinner></bbva-foundations-spinner>
              </div>
            `
          : html`
          <bbva-type-text
                          class="pokemon-title"
                          slot="title"
                          text="${this.title}"
                          size="L"
                        ></bbva-type-text>
              <div class="container-main">
                ${this.pokemonList.map(
                  (pokemon) => html`
                    <div class="pokemon-container">
                      <div class="pokemon-card">
                      <!-- Imagen pokemon --!>
                        <img
                          class="pokemon-image"
                          slot="media"
                          src="${pokemon.sprites.front_default}"
                          alt="${pokemon.name}"
                        />
                        <!-- Nombre pokemon --!>
                        <bbva-type-text
                          class="pokemon-name"
                          slot="title"
                          text="${pokemon.name}"
                          size="L"
                        ></bbva-type-text>

                        <!-- Tipo pokemon --!>
                        <div class="pokemon-type" slot="details">
                          ${pokemon.types.map(
                            (typeInfo) => html`<span>${typeInfo.type.name}</span>`
                          )}
                        </div>
                      </div>
                      <bbva-button-default
                        @click=${this.goToEvolution}
                        class="evolutions-button"
                        text="Evoluciones"
                      ></bbva-button-default>
                    </div>
                  `
                )}
              </div>
            `}
      </div>
      <pokemon-dm></pokemon-dm>
    `;
  }
  

}
