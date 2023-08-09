# Nest + Prisma + GraphQL Boilerplate 

![CI](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/actions/workflows/main.yml/badge.svg)

This is a backend starter template based on [Nest](https://github.com/nestjs/nest) framework with completed setup of [GraphQL](https://docs.nestjs.com/graphql/quick-start) and [Prisma](https://docs.nestjs.com/recipes/prisma). The purpose of using the project is to minimize the redundant effort to setup a backend project from scratch. All of the basic setup done for you.

## Prerequites

- [Node](https://nodejs.org/it/download/current): v16.x
- [Nest CLI](https://docs.nestjs.com/cli/overview): 10.1.11
- [Prisma CLI](https://www.prisma.io/docs/reference/api-reference/command-reference#npm-1): 5.1.1
  
## Quickstart

1. Download zip or click "Use this template"
2. Run ```npm install``` to install packages
3. Run ```npm run migrate``` to generates SQL files and seed dummy data
4. Run ```npm run start:dev``` to run locally with watch mode


## Features

**Nest with GraphQL and Prisma**

Not only nest is a framework for building robust backend applications but also configuring GraphQL and Prisma with the typescript OOP concepts. In the boilerplate, GraphQL is configured with [code first](https://docs.nestjs.com/graphql/quick-start#code-first) approach. You can see the GraphQL configuration [here](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/tree/main/src/gql). Prisma is ORM for databases that can use as an alternative to writing plain SQL. The boilerplate configures Prisma to use SQLite for now but you can change to other databases i.e. PostgreSQL, MySQL, MongoDB.

**Security and Monitoring**

A health check represents a summary of health indicators. A health indicator executes a check of service, whether it is healthy or unhealthy. You'll be able to check the health status at http://localhost:8080/health once you spin up the backend template. The healthcheck module is defined [here](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/tree/main/src/health). A common technique to protect applications from brute-force attacks is rate-limiting. [throttle module](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/blob/main/src/throttle/throttle.module.ts) is a module to configure rate limiting. 

**Development environment**

Environment variables, listing, code formatting, and testing are all configured for you as well as CI with Github action. You can see the [config module](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/tree/main/src/config) to see how the environment variables are configured. Such tests often span a variety of types, including unit tests, end-to-end (e2e) tests, integration tests, and so on. Nest strives to promote the development best practices, including effective testing. Editor configuration is also done for you if you are using VSCode you'll be able to format code when you save. 

## Scripts

#### Installation

```bash
$ npm install
```

#### Database migration and seeding

```bash
$ npm run migrate
```

#### Running the app

```bash
# dev
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

#### Listing, formatting

```bash
# eslint
$ npm run lint

# prettier
$ npm run format
```

#### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/blob/main/LICENSE) file for more info.
