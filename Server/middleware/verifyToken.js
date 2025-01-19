require('dotenv').config()
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    
        const authHeader = req.headers['authorization']
        
        // Verifica se o cabeçalho está presente
        if (!authHeader) {
            return res.status(401).json({ msg: 'Acesso negado! Token não fornecido.' })
        }

        // Extrai o token do cabeçalho
        const token = authHeader.split(' ')[1]

        if (!token) {
            return res.status(401).json({ msg: 'Acesso negado! Token inválido ou ausente.' })
        }

        try {

        // Verifica o token
        const secret = process.env.SECRET
        jwt.verify(token, secret)

        next()
        
    } catch (error) {
        console.error('Erro ao verificar token:', error.message)
        res.status(500).json({ msg: 'Token inválido!' })
    }
}

module.exports = verifyToken;
