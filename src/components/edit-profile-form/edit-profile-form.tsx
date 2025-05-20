import styles from "./style.module.css";

type profileData = {
  currentData?: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
  };
};

function EditProfileForm({ currentData = undefined }: profileData) {
  return (
    <form className={styles.formWrapper}>
      <p className={styles.formTitle}>Редактировать профиль</p>
      <div className={styles.fieldsWrapper}>
        <label className={styles.label}>
          <p className={styles.labelText}>Имя</p>
          <input className={styles.input} type="text" />
        </label>
        <label className={styles.label}>
          <p className={styles.labelText}>Фамилия</p>
          <input className={styles.input} type="text" />
        </label>
        <label className={styles.label}>
          <p className={styles.labelText}>Телефон</p>
          <input
            className={styles.input}
            type="text"
            placeholder="8 800 555 35 35"
          />
        </label>
        <label className={styles.label}>
          <p className={styles.labelText}>Почта</p>
          <input className={styles.input} type="email" />
        </label>
        <button className={styles.submitBtn}>
          Сохранить изменения профиля
        </button>
      </div>
    </form>
  );
}

export default EditProfileForm;
