const serverConfig = `
  const express = require('express');
  const bodyParser = require('body-parser');

  const app = express();
  const port = process.PORT || 3333;

  app.use(bodyParser.json());

  app.get('/', (req, res) => res.json({ name: "Project base node" }));

  app.listen(port, () => console.log('Service started 🟢'));
`;

module.exports = serverConfig;
