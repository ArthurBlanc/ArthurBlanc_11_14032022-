import logement from '../../assets/logements.json'
import Card from '../../components/Card'
import homeBanner from '../../assets/home-banner.jpg'
import './style.css'

function Home() {
	return (
		<div>
			<div className="banner">
				<img src={homeBanner} className="banner-img" />
				<span className="banner-title">
					Chez vous, partout et ailleurs
				</span>
			</div>

			{logement.map((logement) => (
				<Card
					key={`${logement.title}-${logement.id}`}
					link={`/logement/${logement.id}`}
					title={logement.title}
					cover={logement.cover}
				/>
			))}
		</div>
	)
}

export default Home
