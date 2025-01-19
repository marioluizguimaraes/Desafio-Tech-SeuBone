require('dotenv').config()

const express = require('express')
const conectBd = require('../Server/config/conectBd')
const bcrypt = require('bcrypt')
const User = require('./models/User')

const app = express()
app.use(express.json()) // Configura leitura JSON

// Testando resposta básica
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Testando' })
});

// Conectando ao banco de dados
conectBd(app, 3000)

// Endpoint para registro de usuários
app.post('/auth/register', async (req, res) => {
  const { password, email } = req.body

  // Validação de campos
  if (!password) {
    return res.status(422).json({ msg: 'Preencha todos os campos!' })
  }

  try {
    // Verificação de senhas ja cadastradas
    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
        console.log(`Usuário de acesso já cadastrado!`)
        return res.status(422).json({ msg: 'Usuário de acesso já cadastrado!' })
    }

    // Criação de Hash na senha
    const salt = await bcrypt.genSalt(8)
    const passwordHash = await bcrypt.hash(password, salt)

    // Criação do usuário
    const user = new User({
        email: email, 
        password: passwordHash 
    })
    
    await user.save()
    console.log('Usuário cadastrado com sucesso!')
    res.status(201).json({ msg: 'Usuário cadastrado com sucesso!' })

  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.message)
    res.status(500).json({ msg: 'Erro interno do servidor' })
  }
});

console.log('Servidor configurado.')
