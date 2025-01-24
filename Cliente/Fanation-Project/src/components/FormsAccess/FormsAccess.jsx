import React from 'react'

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
    
    const [idUser, setIdUser] = useState('')
    const [token, setToken] = useState('')

    const url = 'http://localhost:3000/auth/login'

    // Função para atualizar o valor da passwordValue
    const handlePassChange = (event) => {
        setPasworValue(event.target.value)
        //console.log(passwordValue)
    }

    const handleVerification = async (event) => {
        setLoading(true)
        event.preventDefault() // Previne o comportamento padrão do formulário

        if (passwordValue.trim() === '') {
            alert('Senha inválida')
            return
        }

        const data = await UserAccess(url, passwordValue)
        const verify = verifyTokenAPI('http://localhost:3000/users', localStorage.getItem('idUser') , localStorage.getItem('token'))
        setLoading(false)
        if (verify) {
            console.log('Token é válido');
        } else {
            console.log('Token não é válido');
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