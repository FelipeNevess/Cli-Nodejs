const jsonApp = require('./fileJson');
const { fileGit, fileEditorConfig } = require('./filesUtilities');
const { fileServer } = require('./filesApp');

const libs = {
  fileGit,
  fileEditorConfig
}

const fileApp = {
  fileServer,
  jsonApp
}

module.exports = {
  libs,
  fileApp
}
