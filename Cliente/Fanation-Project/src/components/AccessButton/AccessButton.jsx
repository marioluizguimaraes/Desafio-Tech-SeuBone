import React from 'react';
import './AccessButton.css'

const AccessButton = () => {


    return(
        <>
            <button className='Button' onSubmit={handleVerification} type='submit'>Acessar</button>
        </>
    )
}

export default AccessButton