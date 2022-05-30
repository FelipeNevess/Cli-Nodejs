const serverConfig = `
  import express from 'express';
  import bodyParser from 'body-parser';
  import cors from 'cors';

  const app = express();
  const port = process.env.PORT || 3333;

  app.use(bodyParser.json());
  
  // Config base cors
  app.use(cors({
    \torigin: "http://localhost:3000", // restrict calls to those this address
    \tmethods: "GET" // only allow GET requests
  }));


  app.get('/', (_req, res) => res
    \t.status(200)
    \t.json({ name: "Hello World!" }));

  app.listen(port, () => console.log('Service started 🟢'));
`;

module.exports = serverConfig;
