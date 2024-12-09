import Home from './components/Home'
import ModuleCSS from './components/ModuleCSS'
import HelloGrid from './components/HelloGrid'
import SectionGrid from './components/SectionGrid'
import LightDark from './components/LightDark'
import NotFound from './components/NotFound'

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
]

export default routes
