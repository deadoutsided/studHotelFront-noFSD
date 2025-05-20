import styles from "./style.module.css";
import accImg from '@assets/accountImg.png'

type AccountData = {
    userName: string;
    id: number;
}

function AccountCard(props: AccountData) {
  return (
    <div className={styles.accountCardWrapper}>
        <img src={accImg} className={styles.accountImg} />
        <p className={styles.userName}>{props.userName}</p>
        <p className={styles.userId}>ID: {props.id}</p>
        <button className={styles.changeProfileBtn} type='button'>Изменить профиль</button>
    </div>
  );
}

export default AccountCard;
