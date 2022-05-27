const { start, get } = require('prompt');

const schema = require('./validations');
// const read = require('./readFile');

const { runningScript, exec } = require('./execut');
const { writeScript } = require('./writingScript');

const { verifyGit } = require('./utils');


start();

function getStated() {
  get(schema, async (err, { nameProject, useGit }) => {
    if (err) { throw new Error(err) }

    const name = nameProject.replace(/ /g, '');
    const data = await verifyGit(useGit);

    try {
      exec(`mkdir ${name}`);
      runningScript(data, name);
      await writeScript(name, useGit);

    } catch(err) {
      console.error(err);
    }
  });
};

exports.getStated = getStated;
