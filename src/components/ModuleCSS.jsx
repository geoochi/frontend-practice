import styles from '../assets/red.module.css'
import styles2 from '../assets/blue.module.css'

export default function ModuleCSS() {
  return (
    <>
      <p className={styles.moduleCSS}>red</p>
      <p className={styles2.moduleCSS}>blue</p>
    </>
  )
}
