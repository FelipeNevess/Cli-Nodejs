module.exports = (p) => {
  const testReges = /^(N|NO)$/i.test(p);

  return testReges;
}