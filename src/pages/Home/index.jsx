import homeBanner from '../../assets/home-banner.jpg'

import Thumb from '../../components/Thumb'
import LoadingScreen from '../../components/Loading'
import Error from '../../components/Error'

import './style.scss'

function Home({ annonces, error, loading }) {
	/* Setting the title of the page. */
	document.title = 'Accueil - Kasa'

	/* Rendering the `<LoadingScreen />` component if the state variable `error` is `false` and the state variable `loading` is `true`. */
	if (!error && loading) {
		return <LoadingScreen />
	}
	/* Rendering the `<Error />` component if the state variable `error` is `true` and the state variable `loading` is `true`. */
	if (error && loading) {
		return <Error />
	}

	return (
		<section className="home">
			<div className="banner">
				<img src={homeBanner} className="banner-img" alt="Banner" />
				<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
			</div>
			{/* Looping through the annonces array and displaying each annonce as a Thumb. */}
			{annonces && (
				<div className="thumb-wrapper">
					{annonces.map((annonce) => (
						<Thumb
							key={`${annonce.title}-${annonce.id}`}
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
