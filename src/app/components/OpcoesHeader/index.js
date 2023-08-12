import React from 'react'
import './estilo.css';

const OpcoesHeader = () => {

    let textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
  return (
    <>
     <ul className='opcoes'>
            {textoOpcoes.map((texto) => (
              <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    </>
  )
}

export default OpcoesHeader