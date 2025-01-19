require('dotenv').config()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authUser = (app) => {
    // Autenticação de login
    app.post("/auth/login", async (req, res) =>{
        
        const {password} = req.body

        if (!password) {
            return res.status(422).json({msg: 'Preencha todos os campos!'})
        }

        try {
            // Verificação de usuários cadastrados
            const users = await User.find() // Obtém todos os usuários
            let user = null

            // Verifica a senha para cada usuário
            for (const u of users) {
                const checkPas = await bcrypt.compare(password, u.password)
                if (checkPas) {
                    user = u
                    break
                }
            }

            const emailUser = user.email
            
            // definindo Token
            const secret = process.env.SECRET
            const token = jwt.sign({id: user._id},secret, {expiresIn: '2m'})
            console.log(`O usuário ${emailUser} fez login`)
            res.status(200).json({emailUser, token})
            
        } catch{
            console.error('Erro ao autenticar o usuário:', error.message)
            res.status(500).json({ msg: 'Erro ao autenticar o usuário:' })
        }
    })
}

module.exports = authUser