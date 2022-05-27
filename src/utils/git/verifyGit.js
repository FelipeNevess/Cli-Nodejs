const { resolve } = require('path');

const read = require('../../readFile');
const testRegex = require('../prompt/testRegex');

module.exports = async (useGit) => {
  const verifyGitInput = testRegex(useGit);

  const { configs, libs, git } = await read(
    resolve(__dirname, '..', '..', 'script.json')
  );

  const result = verifyGitInput ?
    { configs, libs } :
    { git, configs, libs }

  return result;
}