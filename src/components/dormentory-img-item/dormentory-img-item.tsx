import styles from "./style.module.css";

type DormentoryImgItemProps = {
    link: string,
}

function DormentoryImgItem(props: DormentoryImgItemProps) {
  return (
    <div className={styles.dormentoryImgWrapper}>
        <img src={props.link} className={styles.dormentoryImg} />
    </div>
  );
}

export default DormentoryImgItem;
