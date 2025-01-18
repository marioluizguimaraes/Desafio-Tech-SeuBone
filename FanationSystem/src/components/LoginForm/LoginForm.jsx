import React from 'react'
import './LoginForm.css'
import LogoFanation from '../../assets/LogoFanation.png'
import InputPass from '../InputPass/InputPass'

const LoginForm = () => {
    return(
        <div className="login">
            <img src={LogoFanation} alt="logotipo fanation"/>
            <h2>Bem-vindo ao Fanation</h2>
            <p>Acesse a sua conta para iniciar</p>  
            <InputPass/>
        </div>
    )
}

export default LoginForm