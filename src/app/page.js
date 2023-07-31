import styles from './page.module.css';
import Logo from './components/Logo/index.js'
import OpcoesHeader from './components/OpcoesHeader';
import IconesHeader from './components/IconesHeader';

export default function Home() {
  return (
    <div className='Home'>
      <header className='Home-header'>
        <Logo />
        <OpcoesHeader/>
        <IconesHeader/>
      </header>
    </div>
  )
}