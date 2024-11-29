import { lazy } from 'react'

// 使用懒加载导入组件
const Home = lazy(() => import('../components/Home.jsx'))
const ModuleCSS = lazy(() => import('../components/ModuleCSS.jsx'))
const HelloGrid = lazy(() => import('../components/HelloGrid.jsx'))
const SectionGrid = lazy(() => import('../components/SectionGrid.jsx'))
const LightDark = lazy(() => import('../components/LightDark.jsx'))

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/ModuleCSS', name: 'ModuleCSS', component: ModuleCSS },
  { path: '/HelloGrid', name: 'HelloGrid', component: HelloGrid },
  { path: '/SectionGrid', name: 'SectionGrid', component: SectionGrid },
  { path: '/LightDark', name: 'LightDark', component: LightDark },
]

export default routes
