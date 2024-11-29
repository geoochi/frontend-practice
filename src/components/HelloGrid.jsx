import styles from '../assets/HelloGrid.module.css'

export default function HelloGrid() {
  return (
    <div className={styles.app}>
      <div className={styles.gridItem}>
        <div className={styles.gridItemLine}>1</div>
        <div className={styles.gridItemLine}>dasdasd</div>
        <div className={styles.gridItemLine}>dadas</div>
        <div className={styles.gridItemLine}>dadasddaddsad</div>
        <div className={styles.gridItemLine}>dadas</div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.gridItemLine}>2</div>
        <div className={styles.gridItemLine}>qeqwe</div>
        <div className={styles.gridItemLine}>qeqweqwewqweqweqeeqweqeq</div>
        <div className={styles.gridItemLine}>qeqweqwee</div>
        <div className={styles.gridItemLine}>qeqwe</div>
        <div className={styles.gridItemLine}>qeqweqeqe</div>
        <div className={styles.gridItemLine}>qeqweqeqe</div>
        <div className={styles.gridItemLine}>qeqweqeqe</div>
        <div className={styles.gridItemLine}>qeqwewqeqweeqweqw</div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.gridItemLine}>3</div>
        <div className={styles.gridItemLine}>qeqwe</div>
        <div className={styles.gridItemLine}>qeqweqwewqweqe</div>
        <div className={styles.gridItemLine}>qeqweqwee</div>
        <div className={styles.gridItemLine}>qeqweqwee</div>
        <div className={styles.gridItemLine}>qeqweqwee</div>
        <div className={styles.gridItemLine}>qeqwe</div>
        <div className={styles.gridItemLine}>qeqwe</div>
        <div className={styles.gridItemLine}>qeqweqeqe</div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.gridItemLine}>4</div>
        <div className={styles.gridItemLine}>qeqwe</div>
        <div className={styles.gridItemLine}>qeqweqwewqweqe</div>
        <div className={styles.gridItemLine}>qeqweqwee</div>
        <div className={styles.gridItemLine}>qeqweqwee</div>
        <div className={styles.gridItemLine}>qeqwe</div>
        <div className={styles.gridItemLine}>qeqweqeqe</div>
      </div>
    </div>
  )
}
