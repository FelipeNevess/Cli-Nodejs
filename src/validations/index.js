const PATTERN_REGEX = /^(Y|YES|N|NO)$/i;

const objectPatern = {
  pattern: PATTERN_REGEX,
}

const defaultSetting = {
  type: 'string',
  require: true
}

module.exports = {
  properties: {
    nameProject: {
      description: 'Nome do projeto:',
      ...defaultSetting
    },
    useGit: {
      description: 'Iniciar git? (Y/N)',
      ...defaultSetting,
      ...objectPatern
    },
    useTypescript: {
      description: 'Com typescript? (Y/N)',
      ...defaultSetting,
      ...objectPatern
    }
  }
}