const serverConfig = `
  import express from 'express';
  import bodyParser from 'body-parser';
  import cors from 'cors';

  const app = express();
  const port = process.env.PORT || 3333;

  app.use(bodyParser.json());
  app.use(cors());

  // Config base cors
  // origin: "http://localhost:3000", // restrict calls to those this address
  // methods: "GET" // only allow GET requests

  app.get('/', (_req, res) => res.status(200).json({ name: "Hello World!" }));

  app.listen(port, () => console.log('Service started 🟢'));
`;

module.exports = serverConfig;