import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import logement from '../../assets/logements.json'

import ImageSlider from '../../components/ImageSlider'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Accordion from '../../components/Accordion'

import './style.css'

function Logement() {
	let params = useParams()
	let logementFiltered = logement.filter(
		(logement) => logement.id === params.logementId
	)
	let thisLogement = logementFiltered[0]

	let navigate = useNavigate()

	useEffect(() => {
		if (thisLogement === undefined) {
			return navigate('/404')
		}
		document.title = thisLogement.title + ' - Kasa'
	}, [thisLogement, navigate])

	if (thisLogement === undefined) {
		return null
	}

	let [firstName, lastName] = thisLogement.host.name.split(' ')

	return (
		<section>
			<ImageSlider images={thisLogement.pictures} />
			<div className="logement-info-rating-host-wrapper">
				<div className="logement-info-wrapper">
					<h2 className="logement-title">{thisLogement.title}</h2>
					<p className="logement-location">{thisLogement.location}</p>
					<div className="tag-wrapper">
						{thisLogement.tags.map((tag, index) => (
							<Tag tagName={tag} key={`${tag}-${index}`} />
						))}
					</div>
				</div>

				<div className="rating-host-wrapper">
					<Rating rating={thisLogement.rating} />
					<div className="host-wrapper">
						<div className="host-name">
							{firstName}
							<br />
							{lastName}
						</div>
						<img
							className="host-picture"
							src={thisLogement.host.picture}
							alt="Host"
						/>
					</div>
				</div>
			</div>

			<div className="description-equipments-wrapper">
				<Accordion
					title="Description"
					content={thisLogement.description}
				/>
				<Accordion
					title="Équipements"
					content={thisLogement.equipments}
				/>
			</div>
		</section>
	)
}

export default Logement
