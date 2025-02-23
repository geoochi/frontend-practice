import s from './MenuBtn.module.css'
import { useState } from 'react'

const MenuBtn: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='flex flex-col items-center justify-center'>
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

export default MenuBtn
