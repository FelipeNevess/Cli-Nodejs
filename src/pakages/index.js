const { fileGit, fileEditorConfig } = require('./filesUtilities');
const { fileServer } = require('./filesApp');

const libs = {
  fileGit,
  fileEditorConfig
}

const fileApp = {
  fileServer
}

module.exports = {
  libs,
  fileApp
}
