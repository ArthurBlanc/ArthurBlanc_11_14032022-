import { useEffect } from 'react'

import annonce from '../../assets/annonces.json'
import Card from '../../components/Card'
import homeBanner from '../../assets/home-banner.jpg'
import './style.scss'

function Home() {
	/* This is a React Hook, changing the title of the page. */
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
				{annonce.map((annonce) => (
					<Card
						key={`${annonce.title}-${annonce.id}`}
						link={`/annonce/${annonce.id}`}
						title={annonce.title}
						cover={annonce.cover}
					/>
				))}
				<div className="filling-empty-space-child"></div>
				<div className="filling-empty-space-child"></div>
			</div>
		</section>
	)
}

export default Home
