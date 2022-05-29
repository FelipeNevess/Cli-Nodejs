const { jsonTyp, jsonJav } = require('./jsonFiles');
const { fileGit, fileEditorConfig, readmeConfig } = require('./filesUtilities');
const { filePackagesAppTypescript, filePackagesAppJavascript } = require('./filesApp');

const defaultSettings = {
  fileGit,
  fileEditorConfig,
  readmeConfig
}

const typescript = {
  jsonTyp,
  filePackagesAppTypescript
}

const javascript = {
  jsonJav,
  filePackagesAppJavascript
}

module.exports = {
  defaultSettings,
  typescript,
  javascript
}
