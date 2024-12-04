import styles from './ModuleCSS.red.module.css'
import styles2 from './ModuleCSS.blue.module.css'

const ModuleCSS: React.FC = () => {
  return (
    <>
      <p className={styles.moduleCSS}>red</p>
      <p className={styles2.moduleCSS}>blue</p>
    </>
  )
}

export default ModuleCSS
