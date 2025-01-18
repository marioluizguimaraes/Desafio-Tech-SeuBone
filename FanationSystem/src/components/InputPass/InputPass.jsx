import React from 'react'
import './InputPass.css'

const InputPass = () => {

    return(
        <form action="" className='inputpassword'>
            <label For="inputpass">Inserir senha</label>
            <input type="password" name="senha" id="inputpass" placeholder='Digite sua senha'/>
            <button>Acessar</button>
        </form>        
    )
}

export default InputPass