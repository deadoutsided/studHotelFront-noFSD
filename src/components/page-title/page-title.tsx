import styles from './style.module.css'

type PageTitleProps = {
  text: string,
  aditionalStyle?: string,
}

function PageTitle({text, aditionalStyle = ''} : PageTitleProps) {

  return (
    <h1 className={styles.pageTitle + ' ' + aditionalStyle}>
      {text}
    </h1>
  )
}

export default PageTitle
