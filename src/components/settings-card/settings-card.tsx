import { Link } from "react-router";
import styles from "./style.module.css";

type SettingsData = {
    img: string;
    link: string;
    title: string;
    par: string;
}

function SettingsCard(props: SettingsData) {
  return (
    <Link to={props.link} className={styles.settingsCardWrapper}>
        <img src={props.img} className={styles.settingsImg} />
        <p className={styles.title}>{props.title}</p>
        <p className={styles.par}>{props.par}</p>
    </Link>
  );
}

export default SettingsCard;
