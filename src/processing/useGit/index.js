const { testRegex } = require('../../utils');
const { commandsBash, commandsGit } = require('../../commands');
const { defaultSettings } = require('../../packages');

module.exports = (useGit) => {
  const verifyGitInput = testRegex(useGit);

  const result = verifyGitInput ? {
    commands: { ...commandsBash },
    files: {
      fileEditorConfig: defaultSettings.fileEditorConfig,
      readmeConfig: defaultSettings.readmeConfig
    }
  } : {
    commands: {
      ...commandsBash,
      ...commandsGit
    },
    files: { ...defaultSettings }
  }

  return result;
}