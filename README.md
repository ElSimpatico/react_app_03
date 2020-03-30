# Seat:Code Test

This project was been created with the aim of implementing a solution Seat Test.

# Environment variables

**The project needs an environment file**. Create a `env` directory in the root folder of the project and create a `.env.dev` file inside.

```
// .env.dev
API_BASE=https://europe-west1-metropolis-fe-test.cloudfunctions.net/api
GOOGLE_API_KEY=VALUE

```

**Mandatory variables:**

-   `API_BASE` - The URL of seat api
-   `GOOGLE_API_KEY` - The API Key of Google API

## Clone and build

To run application, you should do the following steps.

Clone the repo:

```bash
$   git clone https://github.com/ElSimpatico/react_app_03.git
```

install yarn globally (if not already installed):

```bash
$   npm i -g yarn
```

Install all the dependencies:

```bash
$   yarn install
```

## Install npm dependencies

To install npm dependencies:

-   Install in the root of the project.

# Available scripts

In the project directory you can run:

### `yarn build:dev`

Build the app for development to the build folder.
It correctly bundles React in development mode.

### `yarn serve`

Run the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any errors in the console.

### `yarn test`

Run the test app to view the coverage of code.
