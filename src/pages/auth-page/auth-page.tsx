import AuthForm from "@components/auth-form/auth-form"
import styles from './style.module.css'
import PageTitle from "@components/page-title/page-title"

function AuthPage() {

  return (
    <section className={styles.AuthPage}>
        <PageTitle text='Авторизация' />
        <AuthForm />
    </section>
  )
}

export default AuthPage
