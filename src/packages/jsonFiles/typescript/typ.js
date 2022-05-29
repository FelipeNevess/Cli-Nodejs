const { dependencies, devDependencies } = require('../javascript/jav');

const typescriptJSON = {
  main: "src/server.ts",
  scripts: {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts",
    "start": "nodemon src/server.ts"
  },
  dependencies:{ ...dependencies },
  devDependencies: {
    ...devDependencies,
    "typescript": "^4.7.2",
    "ts-node-dev": "^2.0.0",
    "@types/body-parser": "^1.19.2",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
  }
}

module.exports = typescriptJSON;
