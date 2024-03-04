# Repl.it

A monorepo for a repl.it like live coding environment.

## Packages

This Turborepo includes the following packages/apps:

### Apps and Packages

-   `web`: a [React.js](https://react.dev/) frontend
-   `api`: an [Express/Node](https://expressjs.com/) backend
-   `@repo/ui`: a stub React component library used in `web`
-   `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
-   `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting