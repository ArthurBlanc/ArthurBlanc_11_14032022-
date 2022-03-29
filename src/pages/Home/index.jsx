import homeBanner from '../../assets/home-banner.jpg'

import Thumb from '../../components/Thumb'

import './style.scss'

function Home({ annonces }) {
	/* Setting the title of the page. */
	document.title = 'Accueil - Kasa'

	if (annonces.length === 0) {
		return null
	} else {
		return (
			<section className="home">
				<div className="banner">
					<img src={homeBanner} className="banner-img" alt="Banner" />
					<h1 className="banner-title">
						Chez vous, partout et ailleurs
					</h1>
				</div>
				{/* Looping through the annonces array and displaying each annonce as a Thumb. */}
				{annonces && (
					<div className="thumb-wrapper">
						{annonces.map((annonce) => (
							<Thumb
								key={annonce.id}
								link={`/annonce/${annonce.id}`}
								title={annonce.title}
								cover={annonce.cover}
							/>
						))}
						<div className="filling-empty-space-child"></div>
						<div className="filling-empty-space-child"></div>
					</div>
				)}
			</section>
		)
	}
}

export default Home
