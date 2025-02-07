import { lazy } from 'react'
import Home from './components/Home'
import NotFound from './components/NotFound'

// 使用 lazy 动态导入其他组件
const ModuleCSS = lazy(() => import('./components/ModuleCSS'))
const HelloGrid = lazy(() => import('./components/HelloGrid'))
const SectionGrid = lazy(() => import('./components/SectionGrid'))
const LightDark = lazy(() => import('./components/LightDark'))
const UseMouse = lazy(() => import('./components/UseMouse'))

interface Route {
  path: string
  name: string
  element: React.FC
}

const routes: Route[] = [
  { path: '/*', name: '404', element: NotFound },
  { path: '/', name: 'Home', element: Home },
  { path: '/ModuleCSS', name: 'ModuleCSS', element: ModuleCSS },
  { path: '/HelloGrid', name: 'HelloGrid', element: HelloGrid },
  { path: '/SectionGrid', name: 'SectionGrid', element: SectionGrid },
  { path: '/LightDark', name: 'LightDark', element: LightDark },
  { path: '/UseMouse', name: 'UseMouse', element: UseMouse },
]

export default routes
