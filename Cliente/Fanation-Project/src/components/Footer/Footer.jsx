import React from 'react'
import './Footer.css'
import LogoSeuBone from '../../assets/img/LogoSeuBone.png'

const Footer = ()=>{
    return(
       <footer>
            <div>
                <p>Desenvolvido pela</p>
                <img className='logo' src={LogoSeuBone} alt="Logo Fanation Branca" />           
            </div>
       </footer>
    )
}
export default Footer