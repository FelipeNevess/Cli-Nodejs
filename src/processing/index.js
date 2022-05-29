const useGit = require('./useGit');
const useTypescript = require('./useTypescript');

module.exports = (git, typ) => {
  const responseGit = useGit(git);
  const responseTyp = useTypescript(typ);

  const data = {
    responseGit,
    responseTyp
  }

  return data;
}
