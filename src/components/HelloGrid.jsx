import styles from './HelloGrid.module.css'

const HelloGrid = () => {
  return (
    <div className={styles.app}>
      <div className={styles.gridItem}>
        <p>1</p>
        <p>dasdasd</p>
        <p>dadas</p>
        <p>dadasddaddsad</p>
        <p>dadas</p>
      </div>
      <div className={styles.gridItem}>
        <p>2</p>
        <p>qeqwe</p>
        <p>qeqweqwewqweqweqeeqweqeq</p>
        <p>qeqweqwee</p>
        <p>qeqwe</p>
        <p>qeqweqeqe</p>
        <p>qeqweqeqe</p>
        <p>qeqweqeqe</p>
        <p>qeqwewqeqweeqweqw</p>
      </div>
      <div className={styles.gridItem}>
        <p>3</p>
        <p>qeqwe</p>
        <p>qeqweqwewqweqe</p>
        <p>qeqweqwee</p>
        <p>qeqweqwee</p>
        <p>qeqweqwee</p>
        <p>qeqwe</p>
        <p>qeqwe</p>
        <p>qeqweqeqe</p>
      </div>
      <div className={styles.gridItem}>
        <p>4</p>
        <p>qeqwe</p>
        <p>qeqweqwewqweqe</p>
        <p>qeqweqwee</p>
        <p>qeqweqwee</p>
        <p>qeqwe</p>
        <p>qeqweqeqe</p>
      </div>
    </div>
  )
}

export default HelloGrid
