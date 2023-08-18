import React from 'react'
import perfil from '../../../../public/images/perfil.svg'
import sacola from '../../../../public/images/sacola.svg'
import styled from 'styled-components';


const Icones = styled.ul`
display:flex;
align-items: center;
`
const Icone = styled.li`

margin-right: 40px;
width: 25px;
`

let icones = [perfil, sacola]

const IconesHeader = () => {
    
    return (
        <>
            <Icones>
                {icones.map((icone) => (
                    <Icone><img src={icone.src}></img></Icone>
                ))}
            </Icones>
        </>
    )
}

export default IconesHeader