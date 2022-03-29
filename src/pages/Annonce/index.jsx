import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AnnoncesContext } from '../../context'

import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

import './style.scss'

function Annonce() {
	const { annonces, setIdAnnonce, setError404 } = useContext(AnnoncesContext)
	/* Getting the id of the annonce from the URL. */
	const { annonceId } = useParams()
	/* Looking for the annonce with the id that is in the URL. */
	const thisAnnonce = annonces.find((annonce) => annonce.id === annonceId)

	useEffect(() => {
		setIdAnnonce(thisAnnonce)
		if (!thisAnnonce) {
			setError404(true)
		}
	}, [setIdAnnonce, setError404, thisAnnonce])

	/* Check if the annonce is exist and not loading. If it is not, we return the Error404 component. */
	if (!thisAnnonce) {
		return null
	} else {
		/* Splitting the name of the host into firstName and lastName. */
		const [firstName, lastName] = thisAnnonce.host.name.split(' ')
		/* Setting the title of the page. */
		document.title = thisAnnonce.title + ' - Kasa'
		return (
			<section>
				<Gallery images={thisAnnonce.pictures} />
				<div className="annonce-info-rating-host-wrapper">
					<div className="annonce-info-wrapper">
						<h1 className="annonce-title">{thisAnnonce.title}</h1>
						<p className="annonce-location">
							{thisAnnonce.location}
						</p>
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
					<Collapse
						title="Description"
						content={thisAnnonce.description}
					/>
					<Collapse
						title="Équipements"
						content={thisAnnonce.equipments}
					/>
				</div>
			</section>
		)
	}
}

export default Annonce
