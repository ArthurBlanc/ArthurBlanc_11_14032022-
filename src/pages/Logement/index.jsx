import { useParams } from 'react-router-dom'
import logement from '../../assets/logements.json'

function Logement() {
	let params = useParams()
	let logementFiltered = logement.filter(
		(logement) => logement.id === params.logementId
	)
	let thisLogement = logementFiltered[0]

	return (
		<div>
			<h2>{thisLogement.title}</h2>
			<p>Cover : {thisLogement.cover}</p>
			Pictures :
			<ul>
				{thisLogement.pictures.map((picture, index) => (
					<li key={`${picture}-${index}`}>{picture}</li>
				))}
			</ul>
			<p>Description : {thisLogement.description}</p>
			Host :
			<ul>
				<li>Name : {thisLogement.host.name}</li>
				<li>Picture :{thisLogement.host.picture}</li>
			</ul>
			<p>Rating : {thisLogement.rating}</p>
			<p>Location : {thisLogement.location}</p>
			Equipements :
			<ul>
				{thisLogement.equipments.map((equipment, index) => (
					<li key={`${equipment}-${index}`}>{equipment}</li>
				))}
			</ul>
			Tags :
			<ul>
				{thisLogement.tags.map((tag, index) => (
					<li key={`${tag}-${index}`}>{tag}</li>
				))}
			</ul>
		</div>
	)
}

export default Logement
