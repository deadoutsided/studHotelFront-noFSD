import styles from "./style.module.css";

type ListItem = {
    title: string;
    value: string;
}

type CustomSelectProps = {
    list: ListItem[];
    selectName?: string;
};

function CustomSelect({ list, selectName }: CustomSelectProps) {
  return (
    <select className={styles.сustomSelect} name={selectName} >
      {list.map((el, i) => {
        return <option className={styles.customSelectOption} key={i} value={el.value} disabled={el.value !== 'arh'}>{el.title}</option>
      })}
    </select>
  );
}

export default CustomSelect;
