import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Link } from 'react-router'
import Home from './components/Home.jsx'
import ModuleCSS from './components/ModuleCSS.jsx'
import './assets/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <div id='sidebar'>
        <Link to='/'>/</Link>
        <Link to='/ModuleCSS'>ModuleCSS</Link>
      </div>
      <div id='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ModuleCSS' element={<ModuleCSS />} />
        </Routes>
      </div>
    </HashRouter>
  </StrictMode>
)
