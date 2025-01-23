import React from 'react'
import './InputPass.css'


const InputPass = ({id, value, onChange}) => {

    return(
        <>
            <input className={"InputPass" }
            type="password" 
            name="passwordAccess" 
            id={id}
            value={value}
            onChange={onChange}
            placeholder='Digite sua senha'
            />
        </>
    )
}

export default InputPass