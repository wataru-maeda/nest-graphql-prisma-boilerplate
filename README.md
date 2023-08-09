# Nest + Prisma + GraphQL Boilerplate 

## About

This is a backend starter template based on [Nest](https://github.com/nestjs/nest) framework with completed setup of [GraphQL](https://docs.nestjs.com/graphql/quick-start) and [Prisma](https://docs.nestjs.com/recipes/prisma).

The purpose of using the project is to minimize the redundant effort to setup a backend project from scratch. All of the basic setup done for you.

## What's included

#### Nest with GraphQL and Prisma

Not only nest is a framework for building robust backend application but also configuring GraphQL and Prisma with typescript OOP concept. In the boilerplate, GraphQL is configured with [code first](https://docs.nestjs.com/graphql/quick-start#code-first) approach. Prisma is ORM for database which can use it as an alternative to writing plain SQL. The boilerplate configure Prisma to use SQLite for now but you can change to other database since Prisma supports PostgreSQL, MySQL, SQL Server, SQLite, MongoDB and CockroachDB (Preview).

#### Security and Monitoring

- **Health Check**

  A health check represents a summary of health indicators. A health indicator executes a check of a service, whether it is in a healthy or unhealthy. You'll be able to check health status by 
  http://localhost:8080/health. 

- **Rate Limiting**

  A common technique to protect applications from brute-force attacks is rate-limiting.


#### Development environment

Listing, code formatting and testing are all configured as well as CI with Github action. Such tests often span a variety of types, including unit tests, end-to-end (e2e) tests, integration tests, and so on. Nest strives to promote development best practices, including effective testing. Editor configuration also done for you if you are using VSCode you'll be able to format code when you save. 

## Prerequites

- [Node](https://nodejs.org/it/download/current): v16.x
- [Nest CLI](https://docs.nestjs.com/cli/overview): 10.1.11

## Description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# dev
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Installed Packages

- Nodejs
- Nestjs
- GraphQL
- ESLint
- Prettier
- Jest
