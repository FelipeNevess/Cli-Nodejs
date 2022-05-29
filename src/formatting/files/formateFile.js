function formateFile(file) {
  if (file) {
    return file.toString().replaceAll('  ', '').trim();
  }
}

module.exports = formateFile;
