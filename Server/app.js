require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const conectBd = require('../Server/config/conectBd') 
const User = require('./models/User')

const app = express()
app.use(express.json()) //Configura leitura JSON para o express

// Testando res
app.get('/', (req, res) => {
    res.status(200).json({msg: 'Testando'})
})
// Conectando o bando de dados
conectBd(app, 3000)

// Testando req
app.post('/auth/register', async(req, res) => {
    const{password} = req.body
    
    if(!password){
        console.log('Preencha todos os campus')
        return res.status(422).json({msg: 'Preencha todos os campus'})
    }

    console.log(`Dados recebidos com sucesso`)
    res.status(200).json({msg: `Dados recebidos com sucesso`})
    
    const existingPass = await User.findOne({ password: password});
       
    if (existingPass) {
        return res.status(422).json({ msg: 'Senha de acesso já cadastrada' });
    }

    const salt = await bcrypt.genSalt(8)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({
        password
    })

    try {
    await user.save()
        res.status(200).json({msg: `Senha cadastrada com sucesso`})
        
    } catch (error) {
        res.status(500).json({msg: 'Erro no servidor'})
        console.log('Erro no servidor')
    }
    
})


console.log('fim')

