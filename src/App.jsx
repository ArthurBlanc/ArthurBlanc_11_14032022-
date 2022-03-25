import React from 'react'
import { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import APropos from './pages/A-Propos'
import Annonce from './pages/Annonce'

import LoadingScreen from './components/Loading'
import Error from './components/Error'

import './style.scss'

function App() {
	/* Creating a state variable `annonces` and initializing it with an empty array. */
	const [annonces, setAnnonces] = useState([])
	/* Creating a state variable `loading` and initializing it with `true`. */
	const [loading, setLoading] = useState(true)
	/* Creating a state variable `error` and initializing it with `false`. */
	const [error, setError] = useState(false)

	useEffect(() => {
		/* Fetching the data from the database. */
		fetch(window.location.origin + '/annonces.json')
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
				throw response
			})
			.then((data) => {
				/* Setting the state variable `annonces` to the value of the argument `data`. */
				setAnnonces(data)
				/* Setting the state variable `loading` to `false`. */
				setLoading(false)
			})
			.catch((error) => {
				console.error('Error fetching data:', error)
				/* Setting the state variable `error` to `true`. */
				setError(true)
			})
	}, [])
	return (
		<React.StrictMode>
			<Router>
				<Header />
				{/* Rendering the `<LoadingScreen />` component if the state variable `error` is `false` and the state variable `loading` is `true`. */}
				{!error && loading && <LoadingScreen />}
				{/* Rendering the `<Error />` component if the state variable `error` is `true` and the state variable `loading` is `true`. */}
				{error && loading && <Error />}
				{/* Rendering the `<Routes>` component. if state variable `error` and `loading` are `false`. */}
				{!error && !loading && (
					<Routes>
						{/* This is a route definition. It tells the router to match the URL `/` and render the `<Home />` component. */}
						<Route
							exact
							path="/"
							element={<Home annonces={annonces} />}
						/>
						{/* It tells the router to match the URL `/a-propos` and render the `<APropos />` component. */}
						<Route path="/a-propos" element={<APropos />} />
						{/* It tells the router to match the URL `/annonce/:annonceId` and render the `<Annonce />` component. */}
						<Route
							path="/annonce/:annonceId"
							element={
								<Annonce
									annonces={annonces}
									loading={loading}
								/>
							}
						/>
						{/* It tells the router to match any URL and render the `<Error404 />` component. */}
						<Route path="*" element={<Error404 />} />
					</Routes>
				)}
				<Footer />
			</Router>
		</React.StrictMode>
	)
}

export default App
