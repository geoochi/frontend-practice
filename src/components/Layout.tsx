import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

const Layout: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div id='container'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
