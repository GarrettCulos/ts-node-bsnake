# TypeScript Node Server

# Pre-reqs

To build and run this app locally you will need a few things:

-   Install [Node.js](https://nodejs.org/en/)
-   Install [VS Code](https://code.visualstudio.com/)

# Getting started

-   Clone the repository

```
git clone --depth=1 https://github.com/GarrettCulos/garrett.backend<project_name>
```

-   Install dependencies

```
cd <project_name>
npm install
```

-   Build and run the project

```
npm run build
npm start
```

Or, if you're using VS Code, you can use `cmd + shift + b` to run the default build task (which is mapped to `npm run build`), and then you can use the command palette (`cmd + shift + p`) and select `Tasks: Run Task` > `npm: start` to run `npm start` for you.

> **Note on editors!** - TypeScript has great support in [every editor](http://www.typescriptlang.org/index.html#download-links), but this project has been pre-configured for use with [VS Code](https://code.visualstudio.com/).
> Throughout the README I'll try to call out specific places where VS Code really shines or where this project has been setup to take advantage of specific features.

Finally, navigate to `http://localhost:3000` and you should see the template being served and rendered locally!

# TypeScript + Node

In the next few sections I will call out everything that changes when adding TypeScript to an Express project.
Note that all of this has already been setup for this project, but feel free to use this as a reference for converting other Node.js project to TypeScript.

## Getting TypeScript

TypeScript itself is simple to add to any project with `npm`.

```
npm install -D typescript
```

If you're using VS Code then you're good to go!
VS Code will detect and use the TypeScript version you have installed in your `node_modules` folder.
For other editors, make sure you have the corresponding [TypeScript plugin](http://www.typescriptlang.org/index.html#download-links).

## Project Structure

The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_ and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` and `views` folders remain top level as expected.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name                                  | Description                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **.vscode**                           | Contains VS Code specific settings                                                                                 |
| **dist**                              | Contains the distributable (or output) from your TypeScript build. This is the code you ship                       |
| **node_modules**                      | Contains all your npm dependencies                                                                                 |
| **src**                               | Contains your source code that will be compiled to the dist dir                                                    |
| **src/assets**                        | Static assets that will be used client side                                                                        |
| **src/controllers**                   | Controllers define functions that respond to various http requests                                                 |
| **src/database**                      |                                                                                                                    |
| **src/database/** config.ts           | Sequelize database configuration                                                                                   |
| **src/database/** database.model.ts   | Sequelize model methods                                                                                            |
| **src/database/** database.sync.ts    | Sequelize database synchronization                                                                                 |
| **src/database/** database.ts         | Sequelize database integration                                                                                     |
| **src/database/** sequelize.config.ts | Sequelize database integration                                                                                     |
| **src/middleware**                    | Middleware functions                                                                                               |
| **src/models**                        | Database and ts models                                                                                             |
| **src/router**                        | Router layer combines middleware and controller functions                                                          |
| **src/seeders**                       | Seed scripts for adding basic data                                                                                 |
| **src/services**                      | Reusable services called by controllers and other processes, this is where all database manipulations should occur |
| **src/types**                         | Static assets that will be used client side                                                                        |
| **src/util**                          | Utilities method and functions                                                                                     |
| **src/types**                         | Holds .d.ts files not found on DefinitelyTyped. Covered more in this [section](#type-definition-dts-files)         |
| **src**/server.ts                     | Entry point to your express app                                                                                    |
| **src**/app.ts                        | Node js application file                                                                                           |
| **test**                              | Contains your tests. Separate from source because there is a different build process.                              |
| .env.example                          | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos.                      |
| .travis.yml                           | Used to configure Travis CI build                                                                                  |
| .copyStaticAssets.ts                  | Build script that copies images, fonts, and JS libs to the dist folder                                             |
| jest.config.js                        | Used to configure Jest                                                                                             |
| package.json                          | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)         |
| tsconfig.json                         | Config settings for compiling server code written in TypeScript                                                    |
| tsconfig.tests.json                   | Config settings for compiling tests written in TypeScript                                                          |
| tslint.json                           | Config settings for TSLint code style checking                                                                     |
| pm2.default.json                      | Config for pm2 manager                                                                                             |
| .sequelizerc                          | Config for sequelize ORM                                                                                           |
| .prettierrc                           | Config for prettier automation                                                                                     |
| .gitignore                            | git ignore file                                                                                                    |

## Building the project

It is rare for JavaScript projects not to have some kind of build pipeline these days, however Node projects typically have the least amount build configuration.
Because of this I've tried to keep the build as simple as possible.
If you're concerned about compile time, the main watch task takes ~2s to refresh.

### Configuring TypeScript compilation

TypeScript uses the file `tsconfig.json` to adjust project compile options. More information about the compiler [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).

If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:

TODO: UPDATE LIST

| Npm Script           | Description                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------- |
| `start`              | Does the same as 'npm run serve'. Can be invoked with `npm start`                           |
| `build`              | Full build. Runs ALL build tasks (`build-sass`, `build-ts`, `tslint`, `copy-static-assets`) |
| `serve`              | Runs node on `dist/server.js` which is the apps entry point                                 |
| `watch-node`         | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task   |
| `watch`              | Runs all watch tasks (TypeScript, Node). Use this if you're not touching static assets.     |
| `test`               | Runs tests using Jest test runner                                                           |
| `build-ts`           | Compiles all source `.ts` files to `.js` files in the `dist` folder                         |
| `watch-ts`           | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed         |
| `tslint`             | Runs TSLint on project files                                                                |
| `copy-static-assets` | Calls script that copies JS libs, fonts, and images to dist directory                       |
| `debug`              | Performs a full build and then serves the app in watch mode                                 |
| `serve-debug`        | Runs the app with the --inspect flag                                                        |
| `watch-debug`        | The same as `watch` but includes the --inspect flag so you can attach a debugger            |

## Debugging

Debugging TypeScript is exactly like debugging JavaScript with one caveat, you need source maps.

### Source maps

Source maps allow you to drop break points in your TypeScript source code and have that break point be hit by the JavaScript that is being executed at runtime.

> **Note!** - Source maps aren't specific to TypeScript.
> Anytime JavaScript is transformed (transpiled, compiled, optimized, minified, etc) you need source maps so that the code that is executed at runtime can be _mapped_ back to the source that generated it.

The best part of source maps is when configured correctly, you don't even know they exist! So let's take a look at how we do that in this project.

#### Configuring source maps

First you need to make sure your `tsconfig.json` has source map generation enabled:

```json
"compilerOptions" {
    "sourceMap": true
}
```

With this option enabled, next to every `.js` file that the TypeScript compiler outputs there will be a `.map.js` file as well.
This `.map.js` file provides the information necessary to map back to the source `.ts` file while debugging.

> **Note!** - It is also possible to generate "inline" source maps using `"inlineSourceMap": true`.
> This is more common when writing client side code because some bundlers need inline source maps to preserve the mapping through the bundle.
> Because we are writing Node.js code, we don't have to worry about this.

### Using the debugger in VS Code

Debugging is one of the places where VS Code really shines over other editors.
Node.js debugging in VS Code is easy to setup and even easier to use.
This project comes pre-configured with everything you need to get started.

When you hit `F5` in VS Code, it looks for a top level `.vscode` folder with a `launch.json` file.
In this file, you can tell VS Code exactly what you want to do:

```json
{
	"type": "node",
	"request": "attach",
	"name": "Attach by Process ID",
	"processId": "${command:PickProcess}",
	"protocol": "inspector"
}
```

This is mostly identical to the "Node.js: Attach by Process ID" template with one minor change.
We added `"protocol": "inspector"` which tells VS Code that we're using the latest version of Node which uses a new debug protocol.

With this file in place, you can hit `F5` to attach a debugger.
You will probably have multiple node processes running, so you need to find the one that shows `node dist/server.js`.
Now just set your breakpoints and go!

## Testing

For this project, I chose [Jest](https://facebook.github.io/jest/) as our test framework.
While Mocha is probably more common, Mocha seems to be looking for a new maintainer and setting up TypeScript testing in Jest is wicked simple.

### Install the components

To add TypeScript + Jest support, first install a few npm packages:

```
npm install -D jest ts-jest
```

`jest` is the testing framework itself, and `ts-jest` is just a simple function to make running TypeScript tests a little easier.

### Configure Jest

Jest's configuration lives in `jest.config.js`, so let's open it up and add the following code:

```js
module.exports = {
	globals: {
		'ts-jest': {
			tsConfigFile: 'tsconfig.json'
		}
	},
	moduleFileExtensions: ['ts', 'js'],
	transform: {
		'^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
	},
	testMatch: ['**/test/**/*.test.(ts|js)'],
	testEnvironment: 'node'
};
```

Basically we are telling Jest that we want it to consume all files that match the pattern `"**/test/**/*.test.(ts|js)"` (all `.test.ts`/`.test.js` files in the `test` folder), but we want to preprocess the `.ts` files first.
This preprocess step is very flexible, but in our case, we just want to compile our TypeScript to JavaScript using our `tsconfig.json`.
This all happens in memory when you run the tests, so there are no output `.js` test files for you to manage.

### Running tests

Simply run `npm run test`.
Note this will also generate a coverage report.

### Writing tests

Writing tests for web apps has entire books dedicated to it and best practices are strongly influenced by personal style, so I'm deliberately avoiding discussing how or when to write tests in this guide.
However, if prescriptive guidance on testing is something that you're interested in, [let me know](https://www.surveymonkey.com/r/LN2CV82), I'll do some homework and get back to you.

## TSLint

TSLint is a code linter which mainly helps catch minor code quality and style issues.
TSLint is very similar to ESLint or JSLint but is built with TypeScript in mind.

### TSLint rules

Like most linters, TSLint has a wide set of configurable rules as well as support for custom rule sets.
All rules are configured through `tslint.json`.
In this project, we are using a fairly basic set of rules with no additional custom rules.
The settings are largely based off the TSLint settings that we use to develop TypeScript itself.

### Running TSLint

Like the rest of our build steps, we use npm scripts to invoke TSLint.
To run TSLint you can call the main build script or just the TSLint task.

```
npm run build   // runs full build including TSLint
npm run tslint  // runs only TSLint
```

Notice that TSLint is not a part of the main watch task.
It can be annoying for TSLint to clutter the output window while in the middle of writing a function, so I elected to only run it only during the full build.
If you are interesting in seeing TSLint feedback as soon as possible, I strongly recommend the [TSLint extension in VS Code]().

### VSCode Extensions

To enhance your development experience while working in VSCode we also provide you a list of the suggested extensions for working with this project:

-   [Prettier](https://prettier.io/)
-   [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
-   [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

# Dependencies

Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

TODO Update

| Package           | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| async             | Utility library that provides asynchronous control flow.   |
| bcrypt-nodejs     | Library for hashing and salting user passwords.            |
| bluebird          | Promise library                                            |
| body-parser       | Express 4 middleware.                                      |
| compression       | Express 4 middleware.                                      |
| dotenv            | Loads environment variables from .env file.                |
| errorhandler      | Express 4 middleware.                                      |
| express           | Node.js web framework.                                     |
| express-flash     | Provides flash messages for Express.                       |
| express-session   | Express 4 middleware.                                      |
| express-validator | Easy form validation for Express.                          |
| lodash            | General utility library.                                   |
| lusca             | CSRF middleware.                                           |
| nodemailer        | Node.js library for sending emails.                        |
| request           | Simplified HTTP request library.                           |
| request-promise   | Promisified HTTP request library. Let's us use async/await |
| winston           | Logging library                                            |

## `devDependencies`

TODO Update

| Package      | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| @types       | Dependencies in this folder are `.d.ts` files used to provide types    |
| chai         | Testing utility library that makes it easier to write tests            |
| concurrently | Utility that manages multiple concurrent tasks. Used with npm scripts  |
| jest         | Testing library for JavaScript.                                        |
| nodemon      | Utility that automatically restarts node process when it crashes       |
| supertest    | HTTP assertion library.                                                |
| ts-jest      | A preprocessor with sourcemap support to help use TypeScript wit Jest. |
| ts-node      | Enables directly running TS files. Used to run `copy-static-assets.ts` |
| tslint       | Linter (similar to ESLint) for TypeScript files                        |
| typescript   | JavaScript compiler/type checker that boosts JavaScript productivity   |

To install or update these dependencies you can use `npm install` or `npm update`.

#Original Starter Seed
This was initially created from [TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter) is a striped down version (no db) but has diverged significantly since its initial incarnation.

## Hackathon Starter Project

A majority of this quick start's content was inspired or adapted from Sahat's excellent [Hackathon Starter project](https://github.com/sahat/hackathon-starter).
