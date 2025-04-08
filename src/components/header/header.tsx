import styles from './style.module.css'

type HeaderProps = {
  btnText: string,
  btnFunc: () => void,
}

function Header({btnText, btnFunc} : HeaderProps) {

  return (
    <header className={styles.header}>
        <a href='/'><div className={styles.logo}></div></a>
        <button className={styles.button} onClick={btnFunc}>{btnText}</button>
    </header>
  )
}

export default Header
