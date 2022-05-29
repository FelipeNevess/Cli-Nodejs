const { writeFile } = require('fs/promises');

module.exports = async (file, text) => {
  await writeFile(file, text, (err, res) => {
    if (err) {
      throw new Error(err);
    }

    return res;
  });
}