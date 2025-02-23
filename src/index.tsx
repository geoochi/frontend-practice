import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import routes from './routes'
import Layout from './components/Layout'
import './index.css'
import './global.css'

createRoot(document.getElementById('root')!).render(
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
