# Postcss Tailwind TS Vite Boilerplate

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE, 'License')

A starter frontend boilerplate built with:

- [Vite](https://vitejs.dev/)
- [Postcss](https://postcss.org/)
- [Tailwind](hhttps://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)

This also uses [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) for running pre-commit checks.

## Features

- Support for both TypeScript and JavaScript as needed.
- Use popular tailwind plugin; eg: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin), [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) and [@tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- Add many usefull postcss plugin; eg: [cssnano](https://cssnano.co/), [autoprefixer](https://github.com/postcss/autoprefixer), [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env), [postcss-extend](https://github.com/travco/postcss-extend), [postcss-mixins](https://github.com/postcss/postcss-mixins), [postcss-import](https://github.com/postcss/postcss-import), [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars)
- Minification of TypeScript/JavaScript and CSS processed files.
- May be extended to be used with [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), or [Angular](https://angular.io/).

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [PNPM](https://pnpm.io/)

## Folder structure

```none
src
├── @types
├── assets
├── components
├── global
├── utils
├── ...
├── vite-env.d.ts
└── main.ts

public
├── ...
└── vite.svg
```

- src
  - The entry typescript file is [main.ts](src/main.ts).

## Configuration

You may change the configuration for Vite within the [vite.config.ts](vite.config.ts) file.

## Setup

### Install dependencies

Run:

```sh
  pnpm install
```

## Development

### Server

Run:

```sh
  pnpm run dev
```

### Production build

Run:

```sh
  pnpm run build
```

Will output all build files into the `dist` folder.

## Linting

### Scripts (ESLint)

Run:

```sh
  pnpm run lint:scripts
```

### Styles (StyleLint)

Run:

```sh
  pnpm run lint:styles
```

## License

[MIT](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)
