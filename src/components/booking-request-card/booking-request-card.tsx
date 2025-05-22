import { usePatchRequestMutation } from "@lib/store/api/eventsApi";
import styles from "./style.module.css";

export type RequestData = {
    id: string;

    roomType: string;
  
    rooms: number;
  
    dates: string;
  
    comment: string;
  
    invitedPerson: string;
  
    vistitPurpose: string;
  
    requestAuthor: string;
  
    phoneNumber: string;
  
    email: string;
  
    requestStatus: boolean;
  
    personalDataAgree: boolean;
}

function BookingRequestCard(props: RequestData) {

  const [changeStatus, { isLoading }] = usePatchRequestMutation();

  return (
    <div className={styles.bookingRequestCardWrapper}>
        <div className={styles.statusWrapper}>
            <div className={styles.statusCircle + ' ' + (props.requestStatus ? styles.green : styles.red)} ></div>
            <p className={styles.requestId}>{props.id}</p>
        </div>
        <p className={styles.par}>Тип размещения: {props.roomType}</p>
        <p className={styles.par}>Количество комнат: {props.rooms}</p>
        <p className={styles.par}>Дата: {props.dates}</p>
        <p className={styles.par}>Комментарий: {props.comment}</p>
        <p className={styles.par}>Приглашённое лицо: {props.invitedPerson}</p>
        <p className={styles.par}>Цель приезда: {props.vistitPurpose}</p>
        <p className={styles.par}>Автор заявки: {props.requestAuthor}</p>
        <p className={styles.par}>Номер телефона: {props.phoneNumber}</p>
        <p className={styles.par}>Email: {props.email}</p>
        <p className={styles.par}>Согласие на обработку персональных данных: {props.personalDataAgree ? 'есть' : 'нет'}</p>
        <button className={styles.changeProfileBtn} onClick={() => {changeStatus({_id: props.id, requestStatus: !props.requestStatus})}} type='button'>{props.requestStatus ? 'Отменить согласование' :'Согласовать'}</button>
    </div>
  );
}

export default BookingRequestCard;
