import SearchDormentaryForm from "@components/search-dormentary-form/search-dormentary-form";
import styles from "./style.module.css";

function Cover() {
  return (
    <section className={styles.cover}>
      <h1 className={styles.mainTitle}>Ваш идеальный выбор для комфортного отдыха!</h1>
      <h2 className={styles.secondaryTitle}>
        На этом сайте вы можете выбрать и подать заявку для остановки в
        общежитиях повышенной комфортности!
      </h2>
      <SearchDormentaryForm />
    </section>
  );
}

export default Cover;
