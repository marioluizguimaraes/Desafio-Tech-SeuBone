const User = require('../models/User')
const bcrypt = require('bcrypt')

const registerUser = (app) =>{
    
    // Endpoint para registro de usuários
    app.post('/auth/register', async (req, res) => {
        const { password, email } = req.body
    
        // Validação de campos
        if (!password  || !email) {
        return res.status(422).json({ msg: 'Preencha todos os campos!' })
        }
    
        try {
        
        // Verificação de senhas ja cadastradas
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            console.log(`Usuário de acesso já cadastrado!`)
            return res.status(422).json({ msg: 'Usuário de acesso já cadastrado!' })
        }

         // Verificação de senha já cadastrada
         const users = await User.find() // Obtém todos os usuários
         for (const user of users) {
             const isSamePassword = await bcrypt.compare(password, user.password)
             if (isSamePassword) {
                 console.log('Senha já utilizada por outro usuário!')
                 return res.status(422).json({ msg: 'Senha já utilizada por outro usuário!' })
             }
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
    })
}

module.exports = registerUser
