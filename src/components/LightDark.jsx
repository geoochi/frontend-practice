import { useState, useEffect } from 'react'
import styles from '../assets/LightDark.module.css'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'

export default function LightDark() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    const root = document.documentElement
    document.body.classList.add(styles.bodyTheme)

    if (darkMode) {
      root.style.setProperty('--background-color', '#333333')
      root.style.setProperty('--text-color', '#ffffff')
    } else {
      root.style.setProperty('--background-color', '#ffffff')
      root.style.setProperty('--text-color', '#333333')
    }

    return () => {
      document.body.classList.remove(styles.bodyTheme)
    }
  }, [darkMode])

  return (
    <div className={styles.app}>
      <h1>theme: {darkMode ? 'dark' : 'light'}</h1>
      <button
        className={styles.themeToggle}
        onClick={() => setDarkMode(!darkMode)}
      >
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
