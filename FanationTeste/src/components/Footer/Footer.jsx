import React from 'react';
import logoSeuBone from '../../assets/logoSeuBone.png'
import './Footer.css'

const Footer = () =>{
    return(
        <footer>
            <p>Desenvolvido pela</p>
            <img src={logoSeuBone} alt="Logo da empresa SeuBoné na cor cinza claro" />
        </footer>
    )
}

export default Footer