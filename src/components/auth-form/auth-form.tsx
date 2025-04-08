import { Link } from "react-router";
import styles from "./style.module.css";

function AuthForm() {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Номер телефона
        <input
          className={styles.input}
          type="text"
          placeholder="8 800 555 35 35"
        />
      </label>
      <label className={styles.label}>
        Пароль
        <input className={styles.input} type="password" placeholder="Пароль" />
      </label>
      <label htmlFor="remember" className={styles.checkboxWrapper}>
        Запомнить вход
        <input type="checkbox" id="remember" className={styles.checkboxInput} />
      </label>
      <button className={styles.submitBtn}>Войти</button>
      <Link to="/" className={styles.link}>Восстановление забытого пароля</Link>
    </form>
  );
}

export default AuthForm;
