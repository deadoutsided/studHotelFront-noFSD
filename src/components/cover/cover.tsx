import SearchDormentaryForm from "@components/search-dormentary-form/search-dormentary-form";
import styles from "./style.module.css";
import DormentoryItem from "@components/dormentary-item/dormentory-item";
import PageTitle from "@components/page-title/page-title";
import roomImage1 from "@assets/room1.png"
import roomImage2 from "@assets/room2.png"
import roomImage3 from "@assets/room3.png"

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
            imgLink="https://attache-sadovaya.ru/wp-content/uploads/2021/11/ren_037_ren03663_hd.jpg"
            link="/info"
          />
          <DormentoryItem
            title="Комната повышенной комфортности(двуспальная кровать)"
            address="ОПК№1 Смольный Буян дом 3/1, 2 этаж"
            price={2800}
            imgLink="https://myohotelwenceslas.blob.core.windows.net/imagehandler/Media/ContentItems/1071_01071/m_max__o/superior-2_2.jpeg"
            link="/info"
          />
          <DormentoryItem
            title="Комната повышенной комфортности(двуспальная кровать)"
            address="ОПК№1 Смольный Буян дом 3/1, 2 этаж"
            price={2800}
            imgLink="https://standarthotel.com/upload/iblock/1ea/1eaaf3d47deeafcff9b1931a8fad2dc1.jpg"
            link="/info"
          />
          <DormentoryItem
            title="Комната повышенной комфортности(двуспальная кровать)"
            address="ОПК№1 Смольный Буян дом 3/1, 2 этаж"
            price={2800}
            imgLink="https://attache-sadovaya.ru/wp-content/uploads/2021/11/ren_037_ren03663_hd.jpg"
            link="/info"
          />
          <DormentoryItem
            title="Комната повышенной комфортности(двуспальная кровать)"
            address="ОПК№1 Смольный Буян дом 3/1, 2 этаж"
            price={2800}
            imgLink="https://myohotelwenceslas.blob.core.windows.net/imagehandler/Media/ContentItems/1071_01071/m_max__o/superior-2_2.jpeg"
            link="/info"
          />
        </div>
      </section>
    </>
  );
}

export default Cover;
