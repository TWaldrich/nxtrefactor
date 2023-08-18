import React from 'react'
import IconesHeader from '../IconesHeader'
import OpcoesHeader from '../OpcoesHeader'
import Logo from '../Logo/index'
import styled from 'styled-components';


const HeaderContainer = styled.header`
background-color: #FFF;
display: flex;
justify-content: center;
`

const Header = () => {
    return (

        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header