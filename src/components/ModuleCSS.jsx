import styles from '../assets/ModuleCSS.red.module.css'
import styles2 from '../assets/ModuleCSS.blue.module.css'

export default function ModuleCSS() {
  return (
    <>
      <p className={styles.moduleCSS}>red</p>
      <p className={styles2.moduleCSS}>blue</p>
    </>
  )
}
