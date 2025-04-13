import NotFound from '@/components/NotFound'
import Home from '@/components/Home'
import SectionGrid from '@/components/SectionGrid'
import UseMouse from '@/components/UseMouse'
import CSVLoading from '@/components/CSVLoading'
import MenuBtn from '@/components/MenuBtn'
import SVGAnimation from '@/components/SVGAnimation'

interface Route {
  path: string
  name: string
  element: React.FC
}

const routes: Route[] = [
  { path: '/*', name: '404', element: NotFound },
  { path: '/', name: 'Home', element: Home },
  { path: '/SectionGrid', name: 'SectionGrid', element: SectionGrid },
  { path: '/UseMouse', name: 'UseMouse', element: UseMouse },
  { path: '/CSVLoading', name: 'CSVLoading', element: CSVLoading },
  { path: '/MenuBtn', name: 'MenuBtn', element: MenuBtn },
  { path: '/SVGAnimation', name: 'SVGAnimation', element: SVGAnimation },
]

export default routes
