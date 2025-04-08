import LensIcon from "../../assets/lens.svg?react"
import styles from "./style.module.css";

function SearchDormentaryForm() {
  return (
    <form className={styles.form}>
      <label className={styles.textInputlabel}>
        Заезд
        <input className={styles.textInput} type="date" placeholder="Когда" />
      </label>
      <label className={styles.textInputlabel}>
        Отъезд
        <input className={styles.textInput} type="date" placeholder="Когда" />
      </label>
      <label className={styles.textInputlabel}>
        Гости
        <select className={styles.textInput}>
          <option>2 взрослых, без детей</option>
          <option>1 взрослых, без детей</option>
          <option>3 взрослых, без детей</option>
          <option>0 взрослых, 2 детей</option>
          <option>опция для собак</option>
        </select>
      </label>
      <button className={styles.submitButton}>
        <LensIcon />
      </button>
    </form>
  );
}

export default SearchDormentaryForm;
