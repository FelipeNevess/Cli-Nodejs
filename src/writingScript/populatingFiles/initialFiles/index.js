const write = require('../../write');
const { formateFile } = require('../../../formatting');

module.exports = async (responseGit, directory) => {
  const { fileEditorConfig, fileGit, readmeConfig } = responseGit.files;

  const formattedEditorConfig = await formateFile(fileEditorConfig);
  const formattedGitIgnore = await formateFile(fileGit);

  await write(`${directory}.editorconfig`, formattedEditorConfig);
  await write(`${directory}README.md`, readmeConfig);
  fileGit && await write(`${directory}.gitignore`, formattedGitIgnore);
}