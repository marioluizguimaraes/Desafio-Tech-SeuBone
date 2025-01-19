require('dotenv').config()
const express = require('express')
const conectBd = require('../Server/config/conectBd')
const registerUser = require('./services/registerUser')
const app = express()
const authUser= require('./services/authUser')

app.use(express.json()) // Configura leitura JSON

// Testando resposta básica
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Testando' })
});

// Conectando ao banco de dados
conectBd(app, 3000)

// Registra usuário
registerUser(app)

// Autenticando Login de usuário
authUser(app)

console.log('Servidor configurado!')

