import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import useTheme from '../hooks/useTheme'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

const LightDark: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return (
    <>
      <button
        className={cn(
          'relative w-[60px] h-[32px] px-[2px]',
          'rounded-full cursor-pointer flex items-center',
          'transition-colors duration-300'
        )}
        style={{
          justifyContent: theme === 'dark' ? 'flex-end' : 'flex-start',
          backgroundColor: theme === 'dark' ? '#222222' : '#ffffff',
        }}
        onClick={toggleSwitch}
      >
        <motion.div
          className='w-[28px] h-[28px] rounded-full flex items-center justify-center relative'
          layout
          transition={{
            type: 'spring',
            duration: 0.2,
            bounce: 0,
          }}
        >
          <img
            src={sun}
            alt='light theme'
            className='w-[20px] h-[20px] absolute'
            style={{
              opacity: theme === 'dark' ? 0 : 1,
              transition: 'opacity 0.2s',
            }}
          />
          <img
            src={moon}
            alt='dark theme'
            className='w-[20px] h-[20px] absolute'
            style={{
              opacity: theme === 'dark' ? 1 : 0,
              transition: 'opacity 0.2s',
            }}
          />
        </motion.div>
      </button>
    </>
  )
}

export default LightDark
