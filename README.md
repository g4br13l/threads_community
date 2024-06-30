# Threads Community

A Full Stack monorepo app for purposeful communication within your private community.

This example also shows how to use [Workspace Configurations](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces).

## Using this example

After clone, run the following command to install the dependencies:

```sh
pnpm install
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `backend`: an [Express](https://expressjs.com/) API server
- `frontend`: a [React](https://react.dev/) and [Vite](https://vitejs.dev/) application


- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains shared components)
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
