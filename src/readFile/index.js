const { readFile } = require('fs/promises');

module.exports = async (directory) => {
  try {
    const data = await readFile(directory, 'utf-8');

    return data
  } catch(err) {
    throw new Error(err);
  }
}