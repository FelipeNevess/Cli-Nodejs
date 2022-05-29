const runConfig = require('./configs/configs');

function runningScript({ responseGit: { commands } }, directory) {
  console.log('-- Configurando ambiente...');
  runConfig(commands, directory);
}

module.exports = runningScript;
