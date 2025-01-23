import React from 'react';
import './AccessButton.css'

const InputPass = () => {


    return(
        <>
            <button className='Button' onSubmit={handleVerification} type='submit'>Acessar</button>
        </>
    )
}

export default InputPass