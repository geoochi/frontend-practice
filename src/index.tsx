import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import { Suspense } from 'react'
import routes from './routes/routes'
import Layout from './components/Layout'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

createRoot(rootElement).render(
  <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  </HashRouter>
)
