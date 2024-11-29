import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Link } from 'react-router'
import routes from './routes/routes'
import './assets/index.css'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <div id='sidebar'>
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </div>
    <div id='container'>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </div>
  </HashRouter>
)
