import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

function Header() {
	return (
		<header className="nav-wrapper">
			<Link to="/">
				<img src={logo} />
			</Link>
			<nav className="nav">
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/a-propos"
				>
					A Propos
				</NavLink>
			</nav>
		</header>
	)
}

export default Header
