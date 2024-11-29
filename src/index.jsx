import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Link } from 'react-router'
import Home from './components/Home.jsx'
import ModuleCSS from './components/ModuleCSS.jsx'
import HelloGrid from './components/HelloGrid.jsx'
import SectionGrid from './components/SectionGrid.jsx'
import LightDark from './components/LightDark.jsx'
import './assets/index.css'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <div id='sidebar'>
      <Link to='/'>/</Link>
      <Link to='/ModuleCSS'>ModuleCSS</Link>
      <Link to='/HelloGrid'>HelloGrid</Link>
      <Link to='/SectionGrid'>SectionGrid</Link>
      <Link to='/LightDark'>LightDark</Link>
    </div>
    <div id='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ModuleCSS' element={<ModuleCSS />} />
        <Route path='/HelloGrid' element={<HelloGrid />} />
        <Route path='/SectionGrid' element={<SectionGrid />} />
        <Route path='/LightDark' element={<LightDark />} />
      </Routes>
    </div>
  </HashRouter>
)
