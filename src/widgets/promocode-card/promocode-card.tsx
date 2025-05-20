import styles from "./style.module.css";
import accImg from '@assets/PromocodeImg.png'

type PromocodeData = {
}

function PromocodeCard() {
  return (
    <form className={styles.promocodeCardWrapper}>
        <p className={styles.title}>Промокоды</p>
        <p className={styles.par}>Вы можете получать и хранить ваши промокоды в личном кабинете. Используйте их при бронировании с оплатой на сайте.</p>
        <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          placeholder="8 800 555 35 35"
        />
      </label>
        <button className={styles.changeProfileBtn} type='submit'>Сохранить</button>
    </form>
  );
}

export default PromocodeCard;
