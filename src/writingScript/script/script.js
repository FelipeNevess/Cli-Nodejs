const { formateFile } = require('../../formatting');
const write = require('../write/write');
const {
  libs: {
    fileGit,
    fileEditorConfig
  },
  fileApp: {
    fileServer
  }
} = require('../../pakages');

module.exports = async (bash) => {
  const formattedEditorConfig = await formateFile(fileEditorConfig);
  const formattedGitIgnore = await formateFile(fileGit);
  const formattedServer = await formateFile(fileServer);

  await write(`./${bash}/.editorconfig`, formattedEditorConfig);
  await write(`./${bash}/.gitignore`, formattedGitIgnore);
  await write(`./${bash}/src/server.js`, formattedServer);
}