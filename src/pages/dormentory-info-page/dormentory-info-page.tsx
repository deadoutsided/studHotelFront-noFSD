import DormentoryInfo from "@components/dormentory-info/dormentory-info";
import styles from "./style.module.css";
import PageTitle from "@components/page-title/page-title";
import DormentoryImgItem from "@components/dormentory-img-item/dormentory-img-item";

function DormentoryInfoPage() {
  return (
    <section className={styles.page}>
      <PageTitle text="Информация об общежитии" />
      <div className={styles.flexComponentsWrapper}>
        <div className={styles.imagesWrapper}>
          <DormentoryImgItem link="https://unchainedcrypto.com/wp-content/uploads/2024/08/Untitled-design.png" />
          <DormentoryImgItem link="https://unchainedcrypto.com/wp-content/uploads/2024/08/Untitled-design.png" />
        </div>
        <DormentoryInfo
          address="
ОПК, г. Архангельск, ул. Смольный Буян, д. 3, корп., 1, 218982 (факс);электронная почта: l.vahno@narfu.ru (по списку контактов Вахно Людмила Витальевна); или m.sicheva@narfu.ru (по списку контактов Сычева Мария Сергеевна)"
          description="
Для заселения в общежитие повышенной комфортности (далее ОПК) лиц, приглашенных в университет для работы, учёбы, участия в мероприятиях и так далее, представители институтов и других структурных подразделений университета необходимо заполнить и согласовывать 
заявку установленной формы(docx, 26.5 Kb). При наличии свободных мест заявка является основанием для бронирования мест в ОПК."
          paymentDecreeLink="/"
        />
      </div>
    </section>
  );
}

export default DormentoryInfoPage;
