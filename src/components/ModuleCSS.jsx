import styles from '../assets/red.module.css'
import styles2 from '../assets/blue.module.css'

export default function ModuleCSS() {
  return (
    <>
      <h1 className={styles.moduleCSS}>red</h1>
      <h1 className={styles2.moduleCSS}>blue</h1>
    </>
  )
}
