import styles from './page.module.css';
import Logo from './components/Logo/index.js'
import perfil from '../../public/images/perfil.svg'
import sacola from '../../public/images/sacola.svg'
import OpcoesHeader from './components/OpcoesHeader';


let icones = [perfil, sacola]

export default function Home() {
  return (
    <div className='Home'>
      <header className='Home-header'>
        <Logo />
        <OpcoesHeader/>
        <ul className='icones'>
            {icones.map((icone) => (
              <li className='icone'><img src={icone.src}></img></li>
            ))}
        </ul>

      </header>
    </div>
  )
}