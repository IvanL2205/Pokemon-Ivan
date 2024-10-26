import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './pokemon-list.css.js';
import '@cells-demo/demo-app-template/demo-app-template.js';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import '@bbva-experience-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js';
import '@bbva-experience-components/bbva-type-text/bbva-type-text.js';
import '@bbva-web-components/bbva-foundations-spinner/bbva-foundations-spinner.js';
/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <pokemon-list></pokemon-list>
 * ```
 */
export class PokemonList extends LitElement {
  static get properties() {
    return {
      /**
       * Description for property
       */
      pokemonList: { type: Array },
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Lista Pokemones';
    this.pokemonList = [];
    this.loading = false; 
    this.fetchPokemonData();
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('pokemon-list-shared-styles'),
    ];
  }

  async fetchPokemonData() {
    try {
      
      this.loading = true; 

      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50'
      );
      const data = await response.json();

      const detailedData = await Promise.all(
        data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        )
      );

      const basePokemon = await Promise.all(
        detailedData.map(async(pokemon) => {
          const speciesResponse = await fetch(pokemon.species.url);
          const speciesData = await speciesResponse.json();
          return speciesData.evolves_from_species ? null : pokemon;
        })
      );

      this.pokemonList = basePokemon.filter((pokemon) => pokemon !== null);
      console.log(this.pokemonList);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
    finally {
      this.loading = false; 
    }
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
                        <img
                          class="pokemon-image"
                          slot="media"
                          src="${pokemon.sprites.front_default}"
                          alt="${pokemon.name}"
                        />
                        <bbva-type-text
                          class="pokemon-name"
                          slot="title"
                          text="${pokemon.name}"
                          size="L"
                        ></bbva-type-text>
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
    `;
  }
  

}
