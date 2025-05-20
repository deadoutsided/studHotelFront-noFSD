import DormentoryImgItem from "@components/dormentory-img-item/dormentory-img-item";
import styles from "./style.module.css";
import PageTitle from "@components/page-title/page-title";
import { Link } from "react-router";
import BookingForm from "@components/booking-form/booking-form";

function BookingRequestPage() {
  return (
    <section className={styles.page}>
      <PageTitle text="Заявка на бронирование" />
      <div className={styles.miniInfoAndFormWrapper}>
        <div className={styles.dormentoryMiniInfo}>
          <DormentoryImgItem link="https://unchainedcrypto.com/wp-content/uploads/2024/08/Untitled-design.png" />
          <span className={styles.strongPar}>
            Общежитие повышенной комфортности ФГАОУ ВО Северный (Арктический)
            федеральный университет имени М.В.Ломоносова (САФУ)(г. Архангельск)
          </span>
          <p className={styles.paragraph}>
            ОПК, г. Архангельск, ул. Смольный Буян, д.3, корп. 1 218982(факс)
          </p>
        </div>
        <BookingForm />
      </div>{/* 
      <Link className={styles.linkColor} to="/">
        Отправить заявку на проживание
      </Link> */}
    </section>
  );
}

export default BookingRequestPage;
