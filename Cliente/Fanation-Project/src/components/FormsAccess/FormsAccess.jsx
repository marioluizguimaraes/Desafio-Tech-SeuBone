import React from 'react'
import { useState } from 'react'
import InputPass from '../InputPass/InputPass'
import AccessButton from '../AccessButton/AccessButton'
import Logo from '../../assets/img/LogoFanation.png'
import './FormsAccess.css'

const FormsAccess = () => {
        // Hook useState
        const [passwordValue, setPasworValue] = useState('')
    
        // Função para atualizar o valor da passwordValue
        const handlePassChange = (event) => {
            setPasworValue(event.target.value)
            //console.log(passwordValue)
        }
    
        // Função para verificar o valor da passwordValue
        const handleVerification = () => {
            console.log(passwordValue);
            if (passwordValue.trim() === '') {
                alert('Senha inválida');
                return;
            }
            //chamada para requisição aqui em baixo

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
            <AccessButton/>
        </form>
    )
}

export default FormsAccess