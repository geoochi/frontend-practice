import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import ModuleCSS from './components/ModuleCSS'
import './assets/index.css'

const sidebarItems = ['ModuleCSS', 'Item2', 'Item3']

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='sidebar'>
      {sidebarItems.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
    <div id='container'>
      <HashRouter>
        <Routes>
          {sidebarItems.map((item) => (
            <Route
              key={item}
              path={`/${item.toLowerCase()}`}
              element={<ModuleCSS />}
            />
          ))}
        </Routes>
      </HashRouter>
    </div>
  </StrictMode>
)
