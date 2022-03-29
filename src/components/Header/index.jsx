import { NavLink, Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import './style.scss'

function Header() {
	return (
		<header className="nav-wrapper">
			<Link to="/">
				<img src={logo} alt="Kasa Logo" className="nav-logo" />
			</Link>
			<nav className="nav">
				{/* This is two React Router NavLink, that will change the active class depending on the current route. */}
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
