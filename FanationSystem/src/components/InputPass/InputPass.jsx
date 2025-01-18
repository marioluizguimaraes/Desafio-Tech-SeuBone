import { useState } from 'react';
import React from 'react';
import './InputPass.css';

const InputPass = () => {
    // Hook useState
    const [passwordValue, setPasworValue] = useState('');
    
    // Função para atualizar o valor da passwordValue
    const handleInputChange = (event) => {
        setPasworValue(event.target.value);
    };

    // Função para verificar o valor da passwordValue
    const handleVerification = () => {
        console.log(passwordValue);
        if (passwordValue.trim() !== ''){
            console.log('Senha valida')
        }
        else{
            console.log('Senha invalida')
        }
    };
    
    return (
        <form className='inputpassword'> 
            <label htmlFor="inputpass">Inserir senha</label>
            <input 
                type="password" 
                name="senha" 
                value={passwordValue}
                onChange={handleInputChange}
                id="inputpass" 
                placeholder='Digite sua senha'
            />
            <button 
                onClick={(event) => {
                    event.preventDefault(); 
                    handleVerification()
                    }
                }>
                Acessar
            </button>
        </form>        
    );
};

export default InputPass;
