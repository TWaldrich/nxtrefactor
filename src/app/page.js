import styles from './page.module.css';
import Logo from './components/Logo/index.js'

export default function Home() {
  return (
    <div className='Home'>
      <header className='Home-header'>
      <Logo/>
      </header>
    </div>
  )
}