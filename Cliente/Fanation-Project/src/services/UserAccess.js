import axios from 'axios'

const UserAccess = async (url, password) => {
    try {
        // Requisição POST
        const response = await axios.post(
            url, 
            { password }, // Corpo da requisição
            { headers: { 'Content-Type': 'application/json' } } // Cabeçalhos
        )

        console.log('Autenticado com sucesso:', response.data)
        localStorage.setItem('user', response.data.emailUser)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('idUser', response.data.idUser)
        return response.data 
    
    } catch (error) {
        if (error.response) {
            
            const { status, data } = error.response

            if (status === 404) {
                alert(data.msg || 'Usuário não encontrado.')
            } else if (status === 422) {
                alert(data.msg || 'Preencha todos os campos corretamente!')
            } else {
                alert(data.msg || 'Erro na autenticação!')
            }
        } else {
            alert('Erro de conexão com o servidor!')
        }
    }
}

export default UserAccess
