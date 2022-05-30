const { runningScript, exec } = require('./execut');
const { start, get } = require('prompt');

const processing = require('./processing');
const { writeScript, runningAdditionalCommands } = require('./writingScript');
const schema = require('./validations');

start();

function getStated() {
  get(schema, async (err, { nameProject, useGit, useTypescript }) => {
    if (err) { throw new Error(err) }

    const name = nameProject.replace(/ /g, '');
    const data = processing(useGit, useTypescript);

    try {
      exec(`mkdir ${name}`);
      runningScript(data, name);
      
      await writeScript(data, name);

      console.log('-- Instalando dependências...');
      exec(`cd ${name} && npm i`);

      console.log('-- Running additional commands...');
      runningAdditionalCommands(data, name);
    } catch(err) {
      console.error(err);
    }
  });
};

exports.getStated = getStated;
