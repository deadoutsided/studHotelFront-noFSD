import SearchDormentaryForm from "@components/search-dormentary-form/search-dormentary-form";
import styles from "./style.module.css";
import DormentoryItem from "@components/dormentary-item/dormentory-item";
import PageTitle from "@components/page-title/page-title";

function Cover() {
  return (
    <>
      <section className={styles.cover}>
        <PageTitle text='Ваш идеальный выбор для комфортного отдыха!' />
        <h2 className={styles.secondaryTitle}>
          На этом сайте вы можете выбрать и подать заявку для остановки в
          общежитиях повышенной комфортности!
        </h2>
        <SearchDormentaryForm />
        <div className={styles.arrowIcon}></div>
      </section>
      <section className={styles.dormentarySection}>
        <h3 className={styles.roomsListTitle}>
          Выбор гостиничных комплексов Наши предложения:
        </h3>
        <div className={styles.dormentoryList}>
          <DormentoryItem
            title="Комната повышенной комфортности(двуспальная кровать)"
            address="ОПК№1 Смольный Буян дом 3/1, 2 этаж"
            price={2800}
            imgLink="https://www.catsluvus.com/wp-content/uploads/2020/06/89074971_641127506698738_6029162344960619676_n.jpg"
            link="/"
          />
          <DormentoryItem
            title="Комната повышенной комфортности(двуспальная кровать)"
            address="ОПК№1 Смольный Буян дом 3/1, 2 этаж"
            price={2800}
            imgLink="https://www.catsluvus.com/wp-content/uploads/2020/06/89074971_641127506698738_6029162344960619676_n.jpg"
            link="/"
          />
          <DormentoryItem
            title="Комната повышенной комфортности(двуспальная кровать)"
            address="ОПК№1 Смольный Буян дом 3/1, 2 этаж"
            price={2800}
            imgLink="https://www.catsluvus.com/wp-content/uploads/2020/06/89074971_641127506698738_6029162344960619676_n.jpg"
            link="/"
          />
          <DormentoryItem
            title="Комната повышенной комфортности(двуспальная кровать)"
            address="ОПК№1 Смольный Буян дом 3/1, 2 этаж"
            price={2800}
            imgLink="https://www.catsluvus.com/wp-content/uploads/2020/06/89074971_641127506698738_6029162344960619676_n.jpg"
            link="/"
          />
          <DormentoryItem
            title="Комната повышенной комфортности(двуспальная кровать)"
            address="ОПК№1 Смольный Буян дом 3/1, 2 этаж"
            price={2800}
            imgLink="https://www.catsluvus.com/wp-content/uploads/2020/06/89074971_641127506698738_6029162344960619676_n.jpg"
            link="/"
          />
        </div>
      </section>
    </>
  );
}

export default Cover;
