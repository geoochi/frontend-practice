import s from './MenuBtn.module.css'
import { useState } from 'react'

export default function MenuBtn() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
      <div
        className={s.menubtn + ' ' + (isActive ? s.active : '')}
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
      </div>
      <h1 className={s.hello + ' ' + (isActive ? s.active : '')}>
        hello world
      </h1>
    </div>
  )
}
