import emptyStar from '../../assets/emptyStar.svg'
import star from '../../assets/star.svg'
import './style.css'

function Rating({ rating }) {
	const totalStar = 5
	const starNumber = parseInt(rating)
	const emptyStarNumber = totalStar - starNumber

	return (
		<div className="rating-wrapper">
			{[...Array(starNumber)].map((e, i) => (
				<img
					className="star"
					key={i}
					src={star}
					alt="Full Star Rating"
				/>
			))}
			{[...Array(emptyStarNumber)].map((e, i) => (
				<img
					className="star"
					key={i}
					src={emptyStar}
					alt="Empty Star Rating"
				/>
			))}
		</div>
	)
}

export default Rating
