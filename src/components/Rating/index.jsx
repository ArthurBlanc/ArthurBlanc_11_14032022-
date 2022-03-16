import emptyStar from '../../assets/emptyStar.svg'
import star from '../../assets/star.svg'
import './style.css'

function Rating({ rating }) {
	const totalStar = 5
	const starNumber = parseInt(rating)
	const emptyStarNumber = totalStar - starNumber

	return (
		<div>
			{[...Array(starNumber)].map((e, i) => (
				<img className="star" key={i} src={star} />
			))}
			{[...Array(emptyStarNumber)].map((e, i) => (
				<img className="star" key={i} src={emptyStar} />
			))}
		</div>
	)
}

export default Rating
