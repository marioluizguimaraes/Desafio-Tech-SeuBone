import axios from 'axios'

const verifyTokenAPI = async (url, id, token) => {
    
    try {
        const response = await axios.get(`${url}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (response.status === 200) {
            return true // Token é válido
        } else {
            return false // Token não é válido
        }
    } catch (error) {
        console.error('Erro ao verificar token:', error)
        return false // Caso haja erro (token inválido ou expirado)
    }
}

export default verifyTokenAPI