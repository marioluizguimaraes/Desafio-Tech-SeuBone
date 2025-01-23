import React from 'react';
import './AccessButton.css'

const AccessButton = ({loading}) => {

    return(
        <>
            <button className='Button' type='submit'> {loading ? 'Carregando...' : 'Acessar'}</button>
        </>
    )
}

export default AccessButton