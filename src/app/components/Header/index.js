import React from 'react'
import IconesHeader from '../IconesHeader'
import OpcoesHeader from '../OpcoesHeader'
import Logo from '../Logo/index'
import './estilo.css'

const Header = () => {
    return (

        <header className='Home-header'>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}

export default Header