import styles from './style.module.css'
import AdminPageTitle from "@components/page-title/admin-page-title/admin-page-title"
import AdminAuthForm from "@components/auth-form/admin-auth-form/admin-auth-form"

function AdminAuthPage() {

  return (
    <section className={styles.AuthPage}>
        <AdminPageTitle text='Авторизация' />
        <AdminAuthForm />
    </section>
  )
}

export default AdminAuthPage
