import { useState, useEffect } from 'react'
import styles from '../assets/LightDark.module.css'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'

export default function LightDark() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  useEffect(() => {
    document.body.classList.add(styles.body)

    // 组件卸载时移除 class
    return () => {
      document.body.classList.remove(styles.body)
      document.body.classList.remove(styles.darkMode)
      // 重置 CSS 变量到默认值
      const root = document.documentElement
      root.style.setProperty('--bg-color', '#ffffff')
      root.style.setProperty('--text-color', '#333333')
    }
  }, []) // 空依赖数组，只在组件挂载和卸载时执行

  function toggleTheme() {
    setDarkMode(!darkMode)
    document.body.classList.toggle(styles.darkMode)

    const root = document.documentElement
    if (document.body.classList.contains(styles.darkMode)) {
      root.style.setProperty('--bg-color', '#333333')
      root.style.setProperty('--text-color', '#ffffff')
    } else {
      root.style.setProperty('--bg-color', '#ffffff')
      root.style.setProperty('--text-color', '#333333')
    }
  }

  return (
    <div className={styles.app}>
      <h1>theme: {darkMode ? 'dark' : 'light'}</h1>
      <button className={styles.themeToggle} onClick={() => toggleTheme()}>
        <img
          src={sun}
          className={`${styles.icon} ${styles.sunIcon}`}
          alt='sun'
        />
        <img
          src={moon}
          className={`${styles.icon} ${styles.moonIcon}`}
          alt='moon'
        />
      </button>
    </div>
  )
}
