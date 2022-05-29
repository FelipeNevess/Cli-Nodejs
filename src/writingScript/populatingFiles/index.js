const initialFiles = require('./initialFiles');
const jsonFile = require('./jsonFile');
const coreFiles = require('./coreFiles');

module.exports = async ({ responseGit, responseTyp }, directory) => {
  const DIRECTORY = `./${directory}/`;
  const {
    jsonJav,
    jsonTyp,
    filePackagesAppJavascript,
    filePackagesAppTypescript
  } = responseTyp;

  const jsons = {
    jsonJav,
    jsonTyp
  }

  const filesScript = {
    filePackagesAppJavascript,
    filePackagesAppTypescript
  }

  await initialFiles(responseGit, DIRECTORY);
  await jsonFile(jsons, DIRECTORY);
  await coreFiles(filesScript, DIRECTORY);
}