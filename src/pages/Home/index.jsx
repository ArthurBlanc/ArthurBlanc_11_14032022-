import { useEffect } from 'react'

import logement from '../../assets/logements.json'
import Card from '../../components/Card'
import homeBanner from '../../assets/home-banner.jpg'
import './style.scss'

function Home() {
	useEffect(() => {
		document.title = 'Accueil - Kasa'
	}, [])

	return (
		<section className="home">
			<div className="banner">
				<img src={homeBanner} className="banner-img" alt="Banner" />
				<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
			</div>
			<div className="card-wrapper">
				{logement.map((logement) => (
					<Card
						key={`${logement.title}-${logement.id}`}
						link={`/logement/${logement.id}`}
						title={logement.title}
						cover={logement.cover}
					/>
				))}
				<div className="filling-empty-space-child"></div>
				<div className="filling-empty-space-child"></div>
			</div>
		</section>
	)
}

export default Home
