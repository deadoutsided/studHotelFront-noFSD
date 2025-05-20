import CustomSelect from '@components/custom-select/custom-select'
import styles from './style.module.css'
import { citiesList } from '@utils/cities-list'

type HeaderProps = {
}

function AdminHeader({} : HeaderProps) {

  return (
    <header className={styles.header}>
        <a href='/'><div className={styles.logo}></div></a>
    </header>
  )
}

export default AdminHeader
