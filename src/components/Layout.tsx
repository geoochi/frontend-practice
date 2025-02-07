import { Outlet } from 'react-router'
import { Suspense } from 'react'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div id='container'>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}

export default Layout
