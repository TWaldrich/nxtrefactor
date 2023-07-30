import React from 'react'
import './estilo.css'
import logo from '../../../../public/images/logo.svg';


export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo.src} alt="Logo" />
            <p> <strong>Nx</strong> Refactor</p>
        </div>
    )
}