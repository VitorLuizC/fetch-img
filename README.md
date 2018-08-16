# Fetch IMG

[![Build Status](https://travis-ci.org/VitorLuizC/fetch-img.svg?branch=master)](https://travis-ci.org/VitorLuizC/fetch-img)

Fetch asynchronously an image using it's source and resolve as `HTMLImageElement`.

## Install

This module is published under NPM registry, so you can install using any Node.js package manager.

```sh
npm install fetch-img --save

# Use the command below for Yarn.
yarn add fetch-img
```

## Usage

```js
import fetchIMG from 'fetch-img';

fetchIMG('https://nodejs.org/static/images/logo.svg')
  .then((img) => document.body.appendChild(img))
  .catch((error) => console.error(error));
```

## License

Released under [MIT license](./LICENSE).
