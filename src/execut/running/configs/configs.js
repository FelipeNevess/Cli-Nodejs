const exec = require('../../exec/exec');

module.exports = ({ bash, git }, directory) => {
  const commandsObj = git ? { ...bash, ...git } : bash;
  const arrayConfig = Object.values(commandsObj);

  arrayConfig.forEach((command) => {
    exec(`cd ${directory} && ${command}`);
  });
}