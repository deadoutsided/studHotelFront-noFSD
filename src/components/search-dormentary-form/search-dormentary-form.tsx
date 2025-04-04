import LensIcon from "../../assets/lens.svg?react"
import styles from "./style.module.css";

function SearchDormentaryForm() {
  return (
    <form className={styles.form}>
      <label className={styles.textInputlabel}>
        Заезд
        <input className={styles.textInput} placeholder="Когда" />
      </label>
      <label className={styles.textInputlabel}>
        Отъезд
        <input className={styles.textInput} placeholder="Когда" />
      </label>
      <label className={styles.textInputlabel}>
        Гости
        <input className={styles.textInput} placeholder="2 Взрослых, без детей" />
      </label>
      <button>
        <LensIcon />
      </button>
    </form>
  );
}

export default SearchDormentaryForm;
