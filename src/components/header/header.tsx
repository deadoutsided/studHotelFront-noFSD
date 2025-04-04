import styles from './style.module.css'

function Header() {

  return (
    <header className={styles.header}>
        <a href='/'><div className={styles.logo}></div></a>
        <button className={styles.button}>Войти</button>
    </header>
  )
}

export default Header
