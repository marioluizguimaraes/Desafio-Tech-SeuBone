import React from 'react'
import LogoFanation from '../../assets/LogoFanation.png'
import InputLoginPass from '../InputLoginPass/InputLoginPass'
import './LoginForm.css'

const LoginForm = () => {
    return(
        <div className="login">
            <img src={LogoFanation} alt="logotipo fanation"/>
            <h2>Bem-vindo ao Fanation</h2>
            <p>Acesse a sua conta para iniciar</p>  
            <InputLoginPass/>
        </div>
    )
}

export default LoginForm