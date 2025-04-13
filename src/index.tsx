import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import routes from '@/routes'
import Sidebar from '@/components/Sidebar'
import '@/global.css'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <div className='flex w-screen h-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  </HashRouter>
)
