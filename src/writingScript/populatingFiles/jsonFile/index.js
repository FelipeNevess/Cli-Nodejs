const write = require('../../write');
const read = require('../../../readFile');

module.exports = async ({ jsonJav, jsonTyp }, directory) => {
  const packageJSON = await read(`${directory}package.json`);
  const FORMAT = 2;

  jsonJav && await write(`${directory}package.json`, JSON.stringify({
    ...packageJSON,
    ...jsonJav
  }, null, FORMAT));

  jsonTyp && await write(`${directory}package.json`, JSON.stringify({
    ...packageJSON,
    ...jsonTyp
  }, null, FORMAT));
}