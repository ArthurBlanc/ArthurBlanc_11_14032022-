import { Link } from 'react-router-dom'
import './style.css'

function Card(props) {
	return (
		<div className="card">
			<Link to={props.link}>
				<div className="card-cover-wrapper">
					<img src={props.cover} />
				</div>
				<span className="card-title">{props.title}</span>
			</Link>
		</div>
	)
}

export default Card
