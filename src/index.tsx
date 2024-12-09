import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import routes from './routes'
import Layout from './components/Layout'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

createRoot(rootElement).render(
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Route>
    </Routes>
  </HashRouter>
)
