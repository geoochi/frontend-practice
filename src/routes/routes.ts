import { ComponentType } from 'react'

import Home from '../components/Home'
import ModuleCSS from '../components/ModuleCSS'
import HelloGrid from '../components/HelloGrid'
import SectionGrid from '../components/SectionGrid'
import LightDark from '../components/LightDark'
import NotFound from '../components/NotFound'

interface Route {
  path: string
  name: string
  component: ComponentType
}

const routes: Route[] = [
  { path: '/*', name: '404', component: NotFound },
  { path: '/', name: 'Home', component: Home },
  { path: '/ModuleCSS', name: 'ModuleCSS', component: ModuleCSS },
  { path: '/HelloGrid', name: 'HelloGrid', component: HelloGrid },
  { path: '/SectionGrid', name: 'SectionGrid', component: SectionGrid },
  { path: '/LightDark', name: 'LightDark', component: LightDark },
]

export default routes
