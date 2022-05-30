const { javascript, typescript } = require('../../packages');
const { commandsExecutables } = require('../../commands');
const { testRegex } = require('../../utils');

module.exports = (useType) => {
  const useTypescript = testRegex(useType);

  const response = useTypescript ? javascript : {
    ...typescript, ...commandsExecutables
  };

  return response;
}