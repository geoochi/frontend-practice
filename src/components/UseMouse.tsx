import { useRef } from 'react'
import useMouse from '@react-hook/mouse-position'
import styles from './UseMouse.module.css'

const UseMouse: React.FC = () => {
  const ref = useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })
  const outWidth = 400
  const outHeight = 400

  return (
    <div
      ref={ref}
      className={styles.out}
      style={{ width: outWidth, height: outHeight }}
    >
      <div
        className={styles.in}
        style={{
          transform: `rotateX(${
            mouse.y ? -(mouse.y / (outHeight / 2) - 1) * 15 : 0
          }deg) rotateY(${
            mouse.x ? (mouse.x / (outWidth / 2) - 1) * 15 : 0
          }deg)`,
        }}
      >
        x: {mouse.x}
        <br />
        y: {mouse.y}
      </div>
    </div>
  )
}

export default UseMouse
