import styles from "./style.module.css";

function ChangePassForm() {
  return (
    <form className={styles.form}>
      <p className={styles.title}>Изменить пароль</p>
      <p className={styles.par}>Минимум 8 знаков и без  специальных символов</p>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="password"
          placeholder="Текущий пароль"
        />
      </label>
      <label className={styles.label}>
        <input className={styles.input} type="password" placeholder="Новый пароль" />
      </label>
      <label className={styles.label}>
        <input className={styles.input} type="password" placeholder="Повторить новый пароль" />
      </label>
      <button className={styles.submitBtn}>Обновить пароль</button>
      <button className={styles.cancelBtn}>Отменить измения</button>
    </form>
  );
}

export default ChangePassForm;
