import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import InputPass from '../InputPass/InputPass'
import AccessButton from '../AccessButton/AccessButton'
import Logo from '../../assets/img/LogoFanation.png'
import './FormsAccess.css'

const FormsAccess = () => {
        // Hook useState
        const [passwordValue, setPasworValue] = useState('')
        const [loading, setLoading] = useState(false)

        // Função para atualizar o valor da passwordValue
        const handlePassChange = (event) => {
            setPasworValue(event.target.value)
            //console.log(passwordValue)
        }
    
        const handleVerification = async (event) => {
            event.preventDefault(); // Previne o comportamento padrão do formulário
        
            if (passwordValue.trim() === '') {
                alert('Senha inválida')
                return
            }
        
            setLoading(true);
        
            try {
                // Enviando os dados no formato JSON no corpo da requisição
                const response = await axios.post('http://localhost:4000/auth/login', {
                    password: passwordValue, // Corpo da requisição
                }, {
                    headers: {
                        'Content-Type': 'application/json', // Define o formato do corpo
                    },
                });
        
                console.log('Resposta da API:', response.data);
                alert('Autenticado com sucesso!')
                
                // Exemplo de redirecionamento após autenticação bem-sucedida
                // navigate('/dashboard'); // Descomente se estiver usando React Router
            } catch (error) {
                console.error('Erro ao autenticar:', error.response?.data?.msg || error.message)
                alert('Erro ao autenticar: ' + (error.response?.data?.msg || 'Verifique os dados enviados.'))
            } finally {
                setLoading(false)
            }
        }

    return(
        <form onSubmit={handleVerification} className='FormsAccess'>
            <div className='headerForms'>
                <img src={Logo} alt="logotipo fanation"/>
                <h2>Bem-vindo ao Fanation</h2>
                <p>Acesse a sua conta para iniciar</p>
            </div>
            <label For="passAccess">Inserir senha</label>
            <InputPass 
                id={'passAccess'}
                value={passwordValue} 
                onChange={handlePassChange} 
            />
            <AccessButton loading={loading}/>
        </form>
    )
}

export default FormsAccess