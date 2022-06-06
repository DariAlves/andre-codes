const express = require('express');
const usuariosRoutes = require('./routes/usuarios.routes');

const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 3030;

app.use(usuariosRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 😎`);
});
