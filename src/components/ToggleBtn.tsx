import { motion } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function ToggleBtn() {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <button
      className={cn(
        'relative w-[60px] h-[32px] px-[2px]',
        'rounded-full cursor-pointer flex items-center'
      )}
      style={{
        justifyContent: isOn ? 'flex-end' : 'flex-start',
        backgroundColor: isOn ? '#057cfa' : '#cacaca',
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className='w-[28px] h-[28px] rounded-full bg-white'
        layout
        transition={{
          type: 'spring',
          duration: 0.2,
          bounce: 0,
        }}
      />
    </button>
  )
}
