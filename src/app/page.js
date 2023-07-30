import styles from './page.module.css';
import logo from '../../public/images/logo.svg';

export default function Home() {
  return (
    <div className='Home'>
      <header className='Home-header'>
        <div className='logo'>
          <img src={logo.src} alt="Logo" />
          <p> <strong>Nx</strong> Refactor</p>
        </div>
      </header>
    </div>
  )
}