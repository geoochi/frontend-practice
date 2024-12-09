import { Link } from 'react-router'
import routes from '../routes'

const Sidebar: React.FC = () => {
  return (
    <div id='sidebar'>
      {routes.map(
        route =>
          route.name !== '404' && (
            <Link key={route.path} to={route.path}>
              {route.name}
            </Link>
          )
      )}
    </div>
  )
}

export default Sidebar
