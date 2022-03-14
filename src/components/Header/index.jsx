import { Link } from 'react-router-dom'

function Header() {
	return (
		<div>
			<Link to="/">Accueil</Link>
			<Link to="/a-propos">A Propos</Link>
		</div>
	)
}

export default Header
