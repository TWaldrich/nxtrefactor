import React from 'react'
import perfil from '../../../../public/images/perfil.svg'
import sacola from '../../../../public/images/sacola.svg'

const IconesHeader = () => {
    let icones = [perfil, sacola]
    return (
        <>
            <ul className='icones'>
                {icones.map((icone) => (
                    <li className='icone'><img src={icone.src}></img></li>
                ))}
            </ul>
        </>
    )
}

export default IconesHeader