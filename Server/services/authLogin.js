require('dotenv').config()
const User = require('./models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authLogin = (app) => {
    // Autenticação de login
    app.post("/auth/login", async (req, res) =>{
        
        const {email, password} = req.body

        if (!password  || !email) {
            return res.status(422).json({ msg: 'Preencha todos os campos!' })
        }

        try {
            // Verificação de usuário ja cadastradas
            const user = await User.findOne({ email: email })
            if (!user) {
                console.log(`Usuário não foi encontrado!`) 
            }

            // checagem de senha
            const checkPas = await bcrypt.compare(password, user.password)
            if (!checkPas){
                console.log(`Senha incorreta!`)
                return res.status(422).json({ msg: 'Senha incorreta!' })            
            }
            // definindo Token
            const secret = process.env.SECRET
            const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
            res.status(200).json({msg: "Autenticação confirmada!", token})

        } catch{
            return res.status(404).json({ msg: 'erro na autenticação' })
        }
    })
}

module.exports = authLogin