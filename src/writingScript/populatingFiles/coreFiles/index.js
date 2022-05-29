const write = require('../../write');
const { formateFile } = require('../../../formatting');

module.exports = async ({
  filePackagesAppJavascript,
  filePackagesAppTypescript
}, directory) => {
  const formattedFileAppJav = await formateFile(filePackagesAppJavascript?.serverConfig);
  const formattedFileAppTyp= await formateFile(filePackagesAppTypescript?.serverConfig);

  filePackagesAppJavascript && await write(
    `${directory}src/server.js`,
    formattedFileAppJav
  );

  filePackagesAppTypescript && await write(
    `${directory}src/server.ts`,
    formattedFileAppTyp
  );
}