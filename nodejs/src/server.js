const express = require('express');
const { randomUUID } = require('crypto');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

//! Banco de dados
const usuarios = [];

//! Criar um novo usuário
app.post('/usuario', (request, response) => {
  // André cliente
  const { nome, idade, email } = request.body;

  // André servidor
  const usuario = {
    id: randomUUID(),
    nome,
    idade,
    email,
  };

  usuarios.push(usuario);

  return response.status(201).json(usuario);
});

//! Listar todos os usuários
app.get('/usuario', (request, response) => {
  return response.json(usuarios);
});

//! Atualizar dados do usuário
app.put('/usuario/:id', (request, response) => {
  const { id } = request.params;
  const { nome, idade, email } = request.body;

  const indexUsuario = usuarios.findIndex(usuario => usuario.id === id);

  if (indexUsuario === -1) {
    return response.json({ erro: 'Usuário não encontrado' });
  }

  usuarios[indexUsuario] = { id, nome, idade, email };

  return response.json(usuarios[indexUsuario]);
});

//! Deletar um usuário
app.delete('/usuario/:id', (request, response) => {
  const { id } = request.params;

  const indexUsuario = usuarios.findIndex(usuario => usuario.id === id);

  if (indexUsuario === -1) {
    return response.json({ erro: 'Usuário não encontrado' });
  }

  usuarios.splice(indexUsuario, 1);

  return response.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
