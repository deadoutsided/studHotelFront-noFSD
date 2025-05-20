import CustomSelect from '@components/custom-select/custom-select'
import styles from './style.module.css'
import { citiesList } from '@utils/cities-list'

type HeaderProps = {
  btnText: string,
  btnFunc: () => void,
  btnTourismText: string,
  btnTourismFunc: () => void,
}

function Header({btnText, btnFunc, btnTourismFunc, btnTourismText} : HeaderProps) {

  return (
    <header className={styles.header}>
        <a href='/'><div className={styles.logo}></div></a>
        {/* <Link className={styles.navLink} to='/tourism'>Туризм</Link> */}
        <div className={styles.controlsWrapper}>
          <CustomSelect list={citiesList} />
          <button className={styles.button} onClick={btnTourismFunc}>{btnTourismText}</button>
          <button className={styles.button} onClick={btnFunc}>{btnText}</button>
        </div>
    </header>
  )
}

export default Header
