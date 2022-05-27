const { resolve } = require('path');

const read = require('../../readFile');

module.exports = async (useGit) => {
  const verifyGitInput = /^(N|NO)$/i.test(useGit);

  const data = await read(resolve(__dirname, '..', '..', 'script.json'));
  const { configs, libs, git } = JSON.parse(data);

  const result = verifyGitInput ?
    { configs, libs } :
    { git, configs, libs }

  return result;
}