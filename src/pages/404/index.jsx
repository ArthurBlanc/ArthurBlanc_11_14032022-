import { Link } from 'react-router-dom'
import './style.css'

function Error404() {
	return (
		<section className="error404">
			<h2 className="error404-title">404</h2>
			<p className="error404-subtitle">
				Oups! La page que <br className="error404-subtitle-br" />
				vous demandez n'existe pas.
			</p>
			<Link className="error404-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	)
}

export default Error404
