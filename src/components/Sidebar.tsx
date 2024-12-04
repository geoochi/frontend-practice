import { Link } from 'react-router'
import routes from '../routes/routes'

const Sidebar: React.FC = () => {
  return (
    <div id='sidebar'>
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
