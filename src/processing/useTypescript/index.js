const { javascript, typescript } = require('../../packages');
const { testRegex } = require('../../utils');

module.exports = (useType) => {
  const useTypescript = testRegex(useType);

  const response = useTypescript ? javascript : typescript;

  return response;
}