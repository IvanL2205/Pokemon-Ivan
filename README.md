# @pokemon/pokemon-list

## Package info

### Package installation

Installation using NPM

```bash
npm install @pokemon/pokemon-list
```

### Entry points & exports

- (Default entry point)
  - PokemonList (Class)
- pokemon-list.js
  - pokemon-list (Custom Element)


## PokemonList (Class) pokemon-list (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { PokemonList } from '@pokemon/pokemon-list';

class ExampleElement extends PokemonList {
  ...
}
```

Use the custom element (defined globally):

```js
import '@pokemon/pokemon-list/pokemon-list.js';
```

```html
<pokemon-list ...>
  ...
</pokemon-list>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
  <pokemon-list></pokemon-list>
```

### Properties

- **name**: string = "Cells" (attribute: name)
    Description for property
