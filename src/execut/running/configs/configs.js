const exec = require('../../exec/exec');

module.exports = (configs, bash) => {
  const arrayConfig = Object.values(configs);

  arrayConfig.forEach((script) => {
    exec(`cd ${bash} && ${script}`);
  });
}