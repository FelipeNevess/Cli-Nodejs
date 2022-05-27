function formateFile(file) {
  return file.toString().replaceAll('  ', '').trim();
}

module.exports = formateFile;
