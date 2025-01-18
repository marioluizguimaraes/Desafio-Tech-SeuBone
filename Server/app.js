require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

//Configurando leitura do express para JSON
app.use(express.json());

// Teste de requisição
app.get('/', (req, res) => {
    res.status(200).json({msg: 'foi'})
})

// Registrando um usuário // async é um função acincrona
app.post('/auth/register', async(req, res) => {
    const{password} = req.body

    if(!password){
        res.status(422).json({msg: 'A senha é obrigatório!'})
    }
})


//credenciais de acesso ao bando mongodb
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.342q0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    app.listen(3000)
    console.log('Conectou')
}).catch((err) => console.log(err))

