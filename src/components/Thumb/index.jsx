import { Link } from 'react-router-dom'
import './style.scss'

function Thumb(props) {
	return (
		<div className="thumb">
			<Link to={props.link}>
				<div className="thumb-cover-wrapper">
					<img src={props.cover} alt="" />
				</div>
				<h2 className="thumb-title">{props.title}</h2>
			</Link>
		</div>
	)
}

export default Thumb
