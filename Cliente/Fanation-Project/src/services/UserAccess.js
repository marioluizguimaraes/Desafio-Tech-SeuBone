import axios from 'axios'

const UserAccess = async (url, password) => {
    try {

        // Requisição POST 
        const response = await axios.post(
            url, 
            { password }, // Corpo da requisiç
            { headers: { 'Content-Type': 'application/json' } } // Cabeçalhos
        )

        console.log('Autenticado com sucesso:', response.data)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('idUser', response.data.idUser)
        return  // Retorna os dados da resposta para quem chamar a função
    
    } catch (error) {
        
        if (error.response) {
            // Erros retornados pela API
            const { status, data } = error.response
            if (status === 404) {
                alert(data.msg || 'Acesso inválido')
            } else if (status === 422) {
                alert(data.msg || 'Preencha todos os campos corretamente!')
            } else {
                alert(data.msg || 'Erro na autenticação!')
            }
        }
        else{
            alert('Erro de conexão!')
        }
    }
}




export default UserAccess