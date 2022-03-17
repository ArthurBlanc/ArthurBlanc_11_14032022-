import { Link } from 'react-router-dom'
import './style.scss'

function Card(props) {
	return (
		<div className="card">
			<Link to={props.link}>
				<div className="card-cover-wrapper">
					<img src={props.cover} alt="" />
				</div>
				<h2 className="card-title">{props.title}</h2>
			</Link>
		</div>
	)
}

export default Card
