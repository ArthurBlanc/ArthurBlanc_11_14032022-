import { useParams } from 'react-router-dom'
import logement from '../../assets/logements.json'

import Tag from '../../components/Tag'
import Accordion from '../../components/Accordion'

import './style.css'

function Logement() {
	let params = useParams()
	let logementFiltered = logement.filter(
		(logement) => logement.id === params.logementId
	)
	let thisLogement = logementFiltered[0]

	return (
		<section>
			{thisLogement.pictures.map((picture, index) => (
				<img src={picture} key={`${picture}-${index}`} />
			))}
			<h2 className="logement-title">{thisLogement.title}</h2>
			<p className="logement-location">{thisLogement.location}</p>
			{thisLogement.tags.map((tag, index) => (
				<Tag tagName={tag} key={`${tag}-${index}`} />
			))}
			<p>Rating : {thisLogement.rating}</p>
			<span className="host-name">{thisLogement.host.name}</span>
			<img className="host-picture" src={thisLogement.host.picture} />
			<Accordion title="Description" content={thisLogement.description} />
			<Accordion title="Equipements" content={thisLogement.equipments} />
		</section>
	)
}

export default Logement
