import { Link } from "react-router";
import styles from "./style.module.css";
import LightningIcon from '@assets/ligthningDormentaryPrice.svg?react'

type DormentoryItemProps = {
    title: string,
    address: string,
    price: number,
    link: string,
    imgLink: string,
}

function DormentoryItem(props: DormentoryItemProps) {
  return (
    <div className={styles.dormentary}>
        <img src={props.imgLink} className={styles.img} />
        <p className={styles.address} >{props.address}</p>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.priceLinkWrapper}>
            <div className={styles.priceWrapper}>
                <LightningIcon className={styles.icon} />
                <p className={styles.price}>{props.price}/сутки <span className={styles.priceXThree}>{props.price * 3} Р за 3 суток</span></p>
            </div>
            <Link to={props.link} className={styles.link}>Подробнее</Link>
        </div>
      
    </div>
  );
}

export default DormentoryItem;
