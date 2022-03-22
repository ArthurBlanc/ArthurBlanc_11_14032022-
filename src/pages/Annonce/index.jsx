import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import annonce from '../../assets/annonces.json'

import ImageSlider from '../../components/ImageSlider'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Accordion from '../../components/Accordion'

import './style.scss'

function Annonce() {
	/* Fetching the id of the annonce from the URL. */
	let params = useParams()
	/* To get the annonce with the id that is in the URL. */
	let annonceFiltered = annonce.filter(
		(annonce) => annonce.id === params.annonceId
	)
	let thisAnnonce = annonceFiltered[0]

	/* A React hook that allows you to navigate to a different page. */
	let navigate = useNavigate()

	useEffect(() => {
		/* If thisAnnonce is undefined, navigate to 404 page. */
		if (thisAnnonce === undefined) {
			return navigate('/404')
		}
		/* This is a React Hook, changing the title of the page. */
		document.title = thisAnnonce.title + ' - Kasa'
	}, [thisAnnonce, navigate])

	/* If thisAnnonce is undefined don't render the page. */
	if (thisAnnonce === undefined) {
		return null
	}

	/* Splitting the name of the host into firstName and lastName. */
	let [firstName, lastName] = thisAnnonce.host.name.split(' ')

	return (
		<section>
			<ImageSlider images={thisAnnonce.pictures} />
			<div className="annonce-info-rating-host-wrapper">
				<div className="annonce-info-wrapper">
					<h1 className="annonce-title">{thisAnnonce.title}</h1>
					<p className="annonce-location">{thisAnnonce.location}</p>
					<div className="tag-wrapper">
						{thisAnnonce.tags.map((tag, index) => (
							<Tag tagName={tag} key={`${tag}-${index}`} />
						))}
					</div>
				</div>

				<div className="rating-host-wrapper">
					<Rating rating={thisAnnonce.rating} />
					<div className="host-wrapper">
						<div className="host-name">
							{firstName}
							<br />
							{lastName}
						</div>
						<img
							className="host-picture"
							src={thisAnnonce.host.picture}
							alt="Host"
						/>
					</div>
				</div>
			</div>

			<div className="description-equipments-wrapper">
				<Accordion
					title="Description"
					content={thisAnnonce.description}
				/>
				<Accordion
					title="Équipements"
					content={thisAnnonce.equipments}
				/>
			</div>
		</section>
	)
}

export default Annonce
