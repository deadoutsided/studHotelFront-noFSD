import AuthForm from "@components/auth-form/auth-form"
import styles from './style.module.css'

function AuthPage() {

  return (
    <section className={styles.AuthPage}>
        <h1 className={styles.mainTitle}>
          Авторизация
        </h1>
        <AuthForm />
    </section>
  )
}

export default AuthPage
