module.exports = {
  properties: {
    nameProject: {
      description: 'Nome do projeto',
      type: 'string',
      required: true
    },
    useGit: {
      description: 'Iniciar git? (Y/N)',
      pattern: /^(Y|YES|N|NO)$/i,
      type: 'string',
      require: true,
    } 
  }
}