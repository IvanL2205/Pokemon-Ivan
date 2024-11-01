import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container-main {
  display: flex;
  flex-flow: row wrap;
  background-color: #8ba1d0;
  text-align: center;
  margin: auto;
}

.pokemon-card {
  display: flex;
  border: 2px solid rgb(204, 204, 204);
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  text-align: center;
  background-color: rgb(249, 249, 249);
  flex-flow: wrap;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
  align-content: center;
}

img {
  max-width: 100%;
  height: auto;
}

.evolutions-button {
  background-color: rgb(13, 128, 13);
  border-radius: 10px;
}

img {
  max-width: 100%;
  height: auto;
}

.pokemon-card {
  display: flex;
  border: 2px solid rgb(204, 204, 204);
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  text-align: center;
  background-color: rgb(249, 249, 249);
  flex-flow: wrap;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
  align-content: center;
}

.pokemon-title {
  display: flex;
  justify-content: center;
}

.pokemon-name {
  font-weight: 500;
}

.pokemon-container {
  padding: 1rem;
}

.container {
  display: flex;
  flex-flow: row wrap;
  background-color: #B9D9C3;
  text-align: center;
}

.evolutions-button {
  background-color: rgb(69, 115, 207);
  border-radius: 10px;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
`;
