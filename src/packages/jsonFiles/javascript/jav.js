const javascriptJSON = {
  main: "src/server.js",
  scripts: {
    "dev": "nodemon src/server.js"
  },
  dependencies: {
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "uuid": "^8.3.2"
  },
  devDependencies: {
    "dotenv": "^16.0.1",
    "express-async-errors": "^3.1.1",
    "mysql2": "^2.3.3",
    "nodemon": "^2.0.16"
  }
}

module.exports = javascriptJSON;
