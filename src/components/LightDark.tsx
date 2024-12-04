import { useState, useEffect } from 'react'
import styles from './LightDark.module.css'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'

const LightDark: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.body.classList.add(styles.body)

    return () => {
      document.body.classList.remove(styles.body)
      document.body.classList.remove(styles.darkMode)
      const root = document.documentElement
      root.style.setProperty('--bg-color', '#ffffff')
      root.style.setProperty('--text-color', '#333333')
    }
  }, [])

  function toggleTheme(): void {
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
    <div className={styles.container}>
      <h1>theme: {darkMode ? 'dark' : 'light'}</h1>
      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
      >
        <img
          src={darkMode ? moon : sun}
          alt={darkMode ? 'moon' : 'sun'}
          className={`${styles.icon} ${darkMode ? styles.moonIcon : styles.sunIcon}`}
        />
      </button>
    </div>
  )
}

export default LightDark
