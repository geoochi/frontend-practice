import NotFound from './components/NotFound'
import Home from './components/Home'
import ModuleCSS from './components/ModuleCSS'
import SectionGrid from './components/SectionGrid'
import LightDark from './components/LightDark'
import UseMouse from './components/UseMouse'
import CSVLoading from './components/CSVLoading'
import MenuBtn from './components/MenuBtn'
import ToggleBtn from './components/ToggleBtn'

interface Route {
  path: string
  name: string
  element: React.FC
}

const routes: Route[] = [
  { path: '/*', name: '404', element: NotFound },
  { path: '/', name: 'Home', element: Home },
  { path: '/ModuleCSS', name: 'ModuleCSS', element: ModuleCSS },
  { path: '/SectionGrid', name: 'SectionGrid', element: SectionGrid },
  { path: '/LightDark', name: 'LightDark', element: LightDark },
  { path: '/UseMouse', name: 'UseMouse', element: UseMouse },
  { path: '/CSVLoading', name: 'CSVLoading', element: CSVLoading },
  { path: '/MenuBtn', name: 'MenuBtn', element: MenuBtn },
  { path: '/ToggleBtn', name: 'ToggleBtn', element: ToggleBtn },
]

export default routes
