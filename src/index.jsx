import { StrictMode, Suspense, lazy, Component } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import './assets/index.css'
import pages from './assets/pages.json'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <NotFound name={this.props.name} />
    }
    return this.props.children
  }
}

const NotFound = ({ name }) => (
  <div
    style={{
      textAlign: 'center',
      padding: '40px',
      color: '#666',
    }}
  >
    {name} Not Found
  </div>
)

const DynamicComponent = ({ name }) => {
  const Component = lazy(() => import(`./components/${name}.jsx`))
  return (
    <ErrorBoundary name={name}>
      <Suspense>
        <Component />
      </Suspense>
    </ErrorBoundary>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='sidebar'>
      {pages.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
    <div id='container'>
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={
              <p>
                inspire by{' '}
                <a href='https://jenniferdewalt.com/'>180 websites</a> and{' '}
                <a href='https://levels.io/12-startups-12-months/'>
                  12 startups
                </a>
              </p>
            }
          />

          {pages.map((item) => (
            <Route
              key={item}
              path={`/${item.toLowerCase()}`}
              element={<DynamicComponent name={item} />}
            />
          ))}

          <Route path='*' element={<NotFound name='Page' />} />
        </Routes>
      </HashRouter>
    </div>
  </StrictMode>
)
