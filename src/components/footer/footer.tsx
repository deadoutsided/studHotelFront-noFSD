import { Link } from 'react-router'
import styles from './style.module.css'
import vk from '@assets/vkLogo.png'
import site from '@assets/mainSiteLogo.png'

function Footer() {

  return (
    <footer className={styles.footer}>
        <div className={styles.wrapper}>
        <p className={styles.par}>Северный Арктический Федеральный Университет им. М. В. Ломоносова</p>
        <div className={styles.linksWrapper}>
            <Link to='/' className={styles.link}>
                <img src={vk} className={styles.logo} />
            </Link>
            <Link to='/' className={styles.link}>
                <img src={site} className={styles.logo} />
            </Link>
            <Link to='/' className={styles.link}>
                <img src={vk} className={styles.logo} />
            </Link>
        </div>
        </div>
    </footer>
  )
}

export default Footer
