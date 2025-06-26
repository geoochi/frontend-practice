import { Link, useLocation } from 'react-router'
import routes from '@/routes'
import { cn } from '@/lib/utils'
import LightDark from '@/components/LightDark'

const Sidebar: React.FC = () => {
  const location = useLocation()
  return (
    <div className={cn('flex flex-col justify-center w-[200px] h-full', 'bg-[#f0f0f0] dark:bg-[#111] overflow-y-auto')}>
      <div className='p-[20px] my-[10px] flex justify-center'>
        <LightDark />
      </div>
      {routes.map(
        route =>
          route.name !== '404' && (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                'p-[20px] my-[10px] mx-[20px] text-center rounded-[5px]',
                'decoration-[none] hover:bg-[#e0e0e0] dark:hover:bg-[#222]',
                location.pathname === route.path && 'bg-[#d0d0d0] dark:bg-[#333]'
              )}
            >
              {route.name}
            </Link>
          )
      )}
    </div>
  )
}

export default Sidebar
