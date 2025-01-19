const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    // Verificar se o token está presente no cabeçalho
    if (!authHeader) {
        return res.status(401).json({ msg: 'Acesso negado! Token não fornecido.' })
    }

    const token = authHeader.split(' ')[1] // Extrair o token do formato "Bearer <token>"

    try {
        const secret = process.env.SECRET

        // Verificar o token
        const decoded = jwt.verify(token, secret)

        // Adicionar as informações do usuário ao objeto `req`
        req.user = decoded

        next(); // Continuar para a próxima função
    } catch (error) {
        return res.status(403).json({ msg: 'Token inválido ou expirado!' })
    }
};

module.exports = verifyToken