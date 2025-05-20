import { Link } from "react-router";
import styles from "./style.module.css";

function AdminAuthForm() {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Логин
        <input
          className={styles.input}
          type="text"
          placeholder="admin"
        />
      </label>
      <label className={styles.label}>
        Пароль
        <input className={styles.input} type="password" placeholder="admin" />
      </label>
      <Link to="/admin/requests" className={styles.link}>Войти</Link>
    </form>
  );
}

export default AdminAuthForm;
