import styles from './style.module.css'
import Header from '@components/header/header'
import { Outlet, useLocation, useNavigate } from 'react-router'
import Footer from '@components/footer/footer'

function MainLayout() {

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)

  return (
    <main className={styles.layout}>
        <Header btnText={location.pathname === '/' ? 'Войти' : 'Назад'} btnFunc={() => { navigate('/') }} />
        <Outlet />
        <Footer />
    </main>
  )
}

export default MainLayout
