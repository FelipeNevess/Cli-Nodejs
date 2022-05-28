const { formateFile } = require('../../formatting');
const write = require('../write/write');
const { testRegex } = require('../../utils');
const read = require('../../readFile');
const {
  libs: {
    fileGit,
    fileEditorConfig
  },
  fileApp: {
    fileServer,
    jsonApp
  }
} = require('../../pakages');

module.exports = async (bash, useGit) => {
  const verifyGitInput = testRegex(useGit);

  const formattedEditorConfig = await formateFile(fileEditorConfig);
  const formattedGitIgnore = await formateFile(fileGit);
  const formattedServer = await formateFile(fileServer);

  await write(`./${bash}/.editorconfig`, formattedEditorConfig);
  !verifyGitInput && await write(`./${bash}/.gitignore`, formattedGitIgnore);
  await write(`./${bash}/src/server.js`, formattedServer);

  const packageJSON = await read(`./${bash}/package.json`);

  const fullJson = {
    ...packageJSON,
    ...jsonApp
  }

  await write(`./${bash}/package.json`, JSON.stringify(fullJson, null, 2));
}