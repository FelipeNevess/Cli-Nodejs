const runConfig = require('./configs/configs');
const runLibs = require('./libs/libs');

function runningScript({ configs, libs }, bash) {
  console.log('### Configurando ambiente ###');
  runConfig(configs, bash);

  console.log('### Instalando dependências ###');
  runLibs(libs, bash);
}

module.exports = runningScript;
