import { Link } from 'react-router-dom'
import './style.scss'

function Error(props) {
	return (
		<section className="error">
			<h1 className="error-title">{props.title}</h1>
			<h2 className="error-subtitle">
				{props.subtitle}
				<br className="error404-subtitle-br" />
				{props.subtitle2}
			</h2>
			<Link className="error-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	)
}

export default Error
