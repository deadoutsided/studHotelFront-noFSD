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
          <DormentoryImgItem link="https://avatars.mds.yandex.net/get-altay/6221595/2a00000180be641f71c21af88958d8731a68/orig" />
          <DormentoryImgItem link="https://avatars.mds.yandex.net/get-altay/5538812/2a00000184263ac93c0fe7ca5f149526151b/L_height" />
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
