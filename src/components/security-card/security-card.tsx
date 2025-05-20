import { Link } from "react-router";
import phoneImg from '@assets/Security_phone.png'
import passwordImg from '@assets/Security_password.png'
import mailImg from '@assets/Security_mail.png'
import styles from "./style.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "@components/modal/modal";
import ChangePassForm from "@components/change-pass-form/change-pass";

type SecurityData = {
    currentData?: {
        phoneNumber: string;
        email: string;
      };
};

function SecurityCard({ currentData = undefined }: SecurityData) {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.securityCardWrapper}>
      <p className={styles.title}>Вход и безопасность</p>
      <div className={styles.row}>
        <div className={styles.imageWrapper}>
        <img src={phoneImg} className={styles.icon} />
        </div>
        <div className={styles.rowTextWrapper}>
          <p className={styles.rowTitle}>Телефон</p>
          <p className={styles.rowPar}>{currentData?.phoneNumber ?? '+7(953)2678747'}</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.imageWrapper}>
        <img src={mailImg} className={styles.icon} />
        </div>
        <div className={styles.rowTextWrapper}>
          <p className={styles.rowTitle}>Электронная почта</p>
          <p className={styles.rowPar}>{currentData?.email ?? 'sasha.work7@yandex.ru'}</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.imageWrapper}>
        <img src={passwordImg} className={styles.icon} />
        </div>
        <div className={styles.rowTextWrapper}>
          <p className={styles.rowTitle}>Пароль</p>
          <button className={styles.rowButton} onClick={() => setShowModal(true)}>Изменить пароль</button>
        </div>
      </div>
      {showModal && createPortal(<Modal onClose={() => setShowModal(false)}>
        <ChangePassForm></ChangePassForm>
      </Modal>, document.body, 'passwordModal')}
    </div>
  );
}

export default SecurityCard;
