import { useFetch } from '../../utils/useFetch'
import LoadingScreen from '../../components/Loading'

import Error from '../../components/Error'

import homeBanner from '../../assets/home-banner.jpg'

import Thumb from '../../components/Thumb'

import './style.scss'

function Home() {
	/* Setting the title of the page. */
	document.title = 'Accueil - Kasa'

	/* Fetching the data from the json file. */
	const annonces = useFetch(window.location.origin + 'Kasa/annonces.json')

	/* Checking if the data is loading and if it is, it will display a loading screen. */
	if (annonces.isLoading) {
		return <LoadingScreen />
	}

	/* Checking if there is an error and if there is, it will display the Error component. */
	if (annonces.error) {
		return <Error />
	}

	return (
		<section className="home">
			<div className="banner">
				<img src={homeBanner} className="banner-img" alt="Banner" />
				<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
			</div>
			{/* Looping through the annonces array and displaying each annonce as a Thumb. */}
			{annonces.fetchedData && (
				<div className="thumb-wrapper">
					{annonces.fetchedData.map((annonce) => (
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

export default Home
