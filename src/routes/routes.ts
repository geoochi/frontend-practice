import { lazy, ComponentType } from 'react'

// 使用懒加载导入组件
const Home = lazy(() => import('../components/Home.tsx'))
const ModuleCSS = lazy(() => import('../components/ModuleCSS.tsx'))
const HelloGrid = lazy(() => import('../components/HelloGrid.tsx'))
const SectionGrid = lazy(() => import('../components/SectionGrid.tsx'))
const LightDark = lazy(() => import('../components/LightDark.tsx'))

interface Route {
  path: string
  name: string
  component: ComponentType
}

const routes: Route[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/ModuleCSS', name: 'ModuleCSS', component: ModuleCSS },
  { path: '/HelloGrid', name: 'HelloGrid', component: HelloGrid },
  { path: '/SectionGrid', name: 'SectionGrid', component: SectionGrid },
  { path: '/LightDark', name: 'LightDark', component: LightDark },
]

export default routes
