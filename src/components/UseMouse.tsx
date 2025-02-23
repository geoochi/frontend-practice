import { useRef } from 'react'
import useMouse from '@react-hook/mouse-position'
import { cn } from '@/lib/utils'

const UseMouse: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null!)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })
  const outWidth = 400
  const outHeight = 400

  return (
    <div
      ref={ref}
      className={cn(
        'bg-[#f0f0f0] dark:bg-[#111] transition-colors duration-300',
        'flex items-center justify-center'
      )}
      style={{ width: outWidth, height: outHeight }}
    >
      <div
        className={cn(
          'flex items-center justify-center',
          'transition-colors duration-300',
          'rounded-[10px]',
          'bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] dark:from-[#111] dark:to-[#222]',
          'shadow-gray-400 dark:shadow-gray-800 shadow-lg'
        )}
        style={{
          width: outWidth / 2,
          height: outHeight / 2,
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
