const runConfig = require('./configs/configs');
const runLibs = require('./libs/libs');

function runningScript({ configs, libs, git }, bash) {
  console.log('### Configurando ambiente ###');
  runConfig(configs, bash, git);

  console.log('### Instalando dependências ###');
  runLibs(libs, bash);
}

module.exports = runningScript;
