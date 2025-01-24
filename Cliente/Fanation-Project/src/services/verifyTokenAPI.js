import axios from 'axios'

const verifyTokenAPI = async (url, id, token) => {
    
    try {
        const response = await axios.get(`${url}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (response.status === 200) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error('Erro ao verificar token:', error)
        return false 
    }
}

export default verifyTokenAPI