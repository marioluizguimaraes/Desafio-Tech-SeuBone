import React from 'react'
import './Header.css'
import LogoBranca from '../../assets/img/LogoBranca.png'

const Header = ()=>{
    return(
       <header>
            <img className='logo' src={LogoBranca} alt="Logo Fanation Branca" />           
       </header>
    )
}
export default Header