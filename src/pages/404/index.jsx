import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import './style.scss'

function Error404() {
	/* This is a React Hook, changing the title of the page. */
	useEffect(() => {
		document.title = '404 - Kasa'
	}, [])

	return (
		<section className="error404">
			<h1 className="error404-title">404</h1>
			<h2 className="error404-subtitle">
				Oups! La page que <br className="error404-subtitle-br" />
				vous demandez n'existe pas.
			</h2>
			<Link className="error404-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	)
}

export default Error404
