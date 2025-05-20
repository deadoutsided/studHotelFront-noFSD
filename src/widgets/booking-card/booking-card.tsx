import styles from "./style.module.css";
import accImg from "@assets/BookingImg.png";
import SearchDormentaryForm from "@components/search-dormentary-form/search-dormentary-form";

type BookingsData = {
  bookings?: object[];
};

function BookingsCard({ bookings = [] }: BookingsData) {
  return (
    <div className={styles.bookingCardWrapper}>
      {!bookings.length && (
        <>
          <p className={styles.title}>Мои бронирования</p>
          <p className={styles.par}>У вас пока нет бронирований.</p>
          <p className={styles.par}>Самое время начать планировать отпуск!</p>
          <SearchDormentaryForm />
        </>
      )}
    </div>
  );
}

export default BookingsCard;
