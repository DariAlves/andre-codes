const index = (req, res) => {
  return res.render('index');
};

const listar = (req, res) => {
  return res.render('listar');
};

module.exports = {
  index,
  listar,
};
