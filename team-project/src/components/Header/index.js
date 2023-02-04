import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="team-container">
      <h1 className="team-title">Team Projects</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Deepak
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/ganesh">
            Ganesh
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/ashoke">
            Ashoke
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/naresh">
            Naresh
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
