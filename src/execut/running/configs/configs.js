const exec = require('../../exec/exec');

module.exports = (configs, bash, git) => {
  const arrayConfig = Object
    .values(git ? {...git, ...configs } : configs);

  arrayConfig.forEach((script) => {
    exec(`cd ${bash} && ${script}`);
  });
}