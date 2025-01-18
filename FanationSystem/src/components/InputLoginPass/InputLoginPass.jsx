import { useState } from 'react';
import React from 'react';
import './InputLoginPass.css';

const InputPass = () => {
    // Hook useState
    const [passwordValue, setPasworValue] = useState('');
    
    // Função para atualizar o valor da passwordValue
    const handlePassChange = (event) => {
        setPasworValue(event.target.value);
    };

    // Função para verificar o valor da passwordValue
    const handleVerification = () => {
        console.log(passwordValue);
        if (passwordValue.trim() === '') {
            alert('Senha inválida');
            return;
        }

        try {
            
        } catch (error) {
            
        }
    };
    
    return (
        <form onSubmit={handleVerification} className='inputpassword'> 
            <label htmlFor="inputpass">Inserir senha</label>
            <input 
                type="password" 
                name="senha" 
                id="inputpass" 
                value={passwordValue}
                onChange={handlePassChange}
                placeholder='Digite sua senha'
            />
            <button type='submit'>Acessar</button>
        </form>        
    );
};

export default InputPass;
