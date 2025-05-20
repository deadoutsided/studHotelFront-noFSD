import { Link } from "react-router";
import styles from "./style.module.css";

type DormentoryInfoProps = {
  address: string;
  description: string;
  paymentDecreeLink: string;
};

function DormentoryInfo({
  address,
  description,
  paymentDecreeLink,
}: DormentoryInfoProps) {
  return (
    <div className={styles.DormentoryInfo}>
      <span className={styles.strongPar}>Адрес и контакты:</span>
      <p className={styles.paragraph}>{address}</p>
      <span className={styles.strongPar}>Для ознакомления:</span>
      <p className={styles.paragraph}>{description}</p>
      <span className={styles.strongPar}>Стоимость проживания:</span>
      <p className={styles.paragraph}>
        Стоимость проживания устанавливается в соответствии с действующим
        приказом и его приложениями
      </p>
      <div className={styles.linksWrapper}>
        <div>
          <Link className={styles.link} to="/">
            Заявление в печатном виде
          </Link>
          <Link className={styles.link} to={paymentDecreeLink}>
            Приказ о размере оплаты
          </Link>
        </div>
        <Link className={styles.linkColor} to="/booking-request">
          Отправить заявку на проживание
        </Link>
      </div>
    </div>
  );
}

export default DormentoryInfo;
