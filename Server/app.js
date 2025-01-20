require('dotenv').config()
const express = require('express')
const conectBd = require('./database/mongoConfig')
const registerUser = require('./controllers/registerUser')
const app = express()
const authUser= require('./controllers/authUser')
const User = require('./models/User')
const verifyToken = require('./middleware/verifyToken')

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

// Rota privada
app.get('/users/:id', verifyToken ,async (req, res) =>{
    const id = req.params.id

    const user = await User.findById(id, '-password')
    
    if(!user){
        console.log(`Usuário não encontrado!`)
        return res.status(404).json({ msg: `Usuário não encontrado!`})
    }
    
    console.log(`Usuário ncontrado!`)
    return res.status(200).json({user})
    
})



console.log('Servidor configurado!')

