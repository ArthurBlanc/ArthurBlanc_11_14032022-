import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

function Header() {
	return (
		<div className="nav-wrapper">
			<img src={logo} />
			<nav className="nav">
				<Link to="/">ACCUEIL</Link>
				<Link to="/a-propos">A PROPOS</Link>
			</nav>
		</div>
	)
}

export default Header
