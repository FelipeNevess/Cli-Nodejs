const { exec } = require('../../execut');

module.exports = ({ responseTyp }, directory) => {
  if (responseTyp.commandsExecution) {
    const { execute } = responseTyp.commandsExecution;
    const arrayConfig = Object.values(execute);

    arrayConfig.forEach((command) => {
      exec(`cd ${directory} && npx ${command}`);
    });
  }
}