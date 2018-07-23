# load-image-element

Asynchronous loads an image source and resolve as `HTMLImageElement` (A.K.A. `<img />` or `Image`).

## Install

This module is published under NPM registry, so you can install using any Node.js package manager.

```sh
npm install load-image-element --save

# Use the command below for Yarn.
yarn add load-image-element
```

## Usage

```js
import load from 'load-image-element';

load('https://nodejs.org/static/images/logo.svg')
  .then((element) => document.body.appendChild(element))
  .catch((error) => console.error(error));
```

## License

Released under [MIT license](./LICENSE).
