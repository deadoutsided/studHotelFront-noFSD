import styles from "./style.module.css";

function BookingForm() {

  return (
    <form
      className={styles.form}
      method="post"
      data-testid="booking-form"
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const formData = new FormData(e.currentTarget);
        formData.append('requestStatus', 'off');
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
        const response = await fetch("http://localhost:3001/booking-requests", {
          method: "POST",
          body: formData,
        });
        console.log(await response.json())
      }}
    >
      <div className={styles.labelRowWrapper}>
        <label className={styles.label}>
          Тип размещения<span className={styles.requiredMark}>*</span>
          <input
            name="roomType"
            className={styles.input}
            type="text"
            placeholder="крутой"
          />
        </label>
        <label className={styles.label}>
          Количество мест<span className={styles.requiredMark}>*</span>
          <input
            name="rooms"
            className={styles.input}
            type="number"
            placeholder="2"
          />
        </label>
        <label className={styles.label}>
          Период проживания<span className={styles.requiredMark}>*</span>
          <input
            name="dates"
            className={styles.input}
            type="date"
            placeholder="0"
          />
        </label>
      </div>
      <label className={styles.label}>
        Комментарий
        <input
          name="comment"
          className={styles.input}
          type="text"
          placeholder="0"
        />
      </label>
      <label className={styles.label}>
        ФИО должность, приглашенного лица
        <span className={styles.requiredMark}>*</span>
        <input
          name="invitedPerson"
          className={styles.input}
          type="text"
          placeholder="крутое фио"
        />
      </label>
      <label className={styles.label}>
        Цель приезда<span className={styles.requiredMark}>*</span>
        <input
          name="vistitPurpose"
          className={styles.input}
          type="text"
          placeholder="крутая цель"
        />
      </label>
      <label className={styles.label}>
        Автор заявки<span className={styles.requiredMark}>*</span>
        <input
          name="requestAuthor"
          className={styles.input}
          type="text"
          placeholder="крутой чел"
        />
      </label>
      <div className={styles.labelRowWrapper}>
        <label className={styles.label}>
          Телефон<span className={styles.requiredMark}>*</span>
          <input
            name="phoneNumber"
            className={styles.input}
            type="text"
            placeholder="крутой номер"
          />
        </label>
        <label className={styles.label}>
          Электронная почта<span className={styles.requiredMark}>*</span>
          <input
            name="email"
            className={styles.input}
            type="text"
            placeholder="azaza@mail.ru"
          />
        </label>
      </div>
      <label htmlFor="remember" className={styles.checkboxWrapper}>
        Подтвердите согласие на обработку персональных данных
        <input
          type="checkbox"
          id="remember"
          name="personalDataAgree"
          className={styles.checkboxInput}
        />
      </label>
      <button type="submit" className={styles.submitBtn}>
        Отправить заявку на проживание
      </button>
    </form>
  );
}

export default BookingForm;
