const exec = require('../../exec/exec');

module.exports = (libs, bash) => {
  const arrayLibs = Object.values(libs);

  arrayLibs.forEach((lib) => {
    console.log(`-- Instalando ${lib}`);
    exec(`cd ${bash} && npm i ${lib}`);
  });
}