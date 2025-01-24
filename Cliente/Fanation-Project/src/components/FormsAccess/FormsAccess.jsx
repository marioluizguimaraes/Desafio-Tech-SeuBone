import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import InputPass from '../InputPass/InputPass'
import AccessButton from '../AccessButton/AccessButton'
import Logo from '../../assets/img/LogoFanation.png'
import './FormsAccess.css'
import UserAccess from '../../services/UserAccess'
import verifyTokenAPI from '../../services/verifyTokenAPI'

function FormsAccess() {
    // Hook useState
    const [passwordValue, setPasworValue] = useState('')
    const [loading, setLoading] = useState(false)
        
    const navigate = useNavigate()
    const url = 'http://localhost:3000/auth/login'

    // Atualizar o valor da passwordValue
    const handlePassChange = (event) => {
        setPasworValue(event.target.value)
        //console.log(passwordValue)
    }

const handleVerification = async (event) => {
    event.preventDefault() 

    if (passwordValue.trim() === '') {
        alert('Senha inválida')
        return
    }

    setLoading(true)

    try {
        // Chama o serviço de autenticação
        const data = await UserAccess(url, passwordValue)

        if (data) {
            // Verifica o token
            const verify = await verifyTokenAPI(
                'http://localhost:3000/users',
                localStorage.getItem('idUser'),
                localStorage.getItem('token')
            )

            if (verify) {
                console.log('Token é válido')
                navigate('/dashboard')
            } else {
                navigate('/login')
            }
        }
    } catch (error) {
        console.error('Erro na autenticação:', error)
    } finally {
        setLoading(false)
    }
}


    return (
        <form onSubmit={handleVerification} className='FormsAccess'>
            <div className='headerForms'>
                <img src={Logo} alt="logotipo fanation" />
                <h2>Bem-vindo ao Fanation</h2>
                <p>Acesse a sua conta para iniciar</p>
            </div>
            <label htmlFor="passAccess">Inserir senha</label>
            <InputPass
                id={'passAccess'}
                value={passwordValue}
                onChange={handlePassChange} />
            <AccessButton loading={loading} />
        </form>
    )
}

export default FormsAccess