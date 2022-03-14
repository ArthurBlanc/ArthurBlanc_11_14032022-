import { Link } from 'react-router-dom'
import logement from '../../assets/logements.json'

function Home() {
	return (
		<div>
			<h2>Home</h2>
			<ul>
				{logement.map((logement) => (
					<li key={`${logement.title}-${logement.id}`}>
						<Link to={`/logement/${logement.id}`}>
							{logement.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Home
