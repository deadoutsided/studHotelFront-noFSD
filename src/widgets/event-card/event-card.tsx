import styles from "./style.module.css";

type EventData = {
    title: string;
    dateTime: string;
    description?: string;
    link: string;
    image: string;
};

function EventCard({ title, dateTime, description, link, image }: EventData) {
  return (
    <div className={styles.eventCardWrapper} >
        <img src={image} className={styles.bgImage} />
        <div className={styles.infoWrapper}>
            <p className={styles.eventTitle}>{title}</p>
            <p className={styles.dateTimePar}>{dateTime}</p>
            <a href={link} target="_blank" className={styles.detailsLink}>Подробнее</a>
            <p className={styles.descriptionPar} >{description}</p>
        </div>
    </div>
  );
}

export default EventCard;
