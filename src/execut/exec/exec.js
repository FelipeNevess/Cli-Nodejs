const { execSync } = require('child_process');

module.exports = (command) => {
  execSync(command, (err, res) => {
    if (err) {
      throw new Error(err);
    }

    return res;
  });
}