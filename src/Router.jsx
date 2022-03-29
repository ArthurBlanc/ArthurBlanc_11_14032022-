import React, { useContext } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import APropos from './pages/A-Propos'
import Annonce from './pages/Annonce'

import LoadingScreen from './components/Loading'
import Error from './components/Error'

import { AnnoncesContext } from './context'

import './style.scss'

function Router() {
	const { loading, error, error404 } = useContext(AnnoncesContext)

	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Routes>
					{/* This is a route definition. It tells the router to match the URL `/` and render the `<Home />` component. */}
					<Route
						exact
						path="/"
						element={
							<>
								<Home />
								{(!error && loading && <LoadingScreen />) ||
									(error && loading && <Error />)}
							</>
						}
					/>
					{/* It tells the router to match the URL `/annonce/:annonceId` and render the `<Annonce />` component. */}
					<Route
						exact
						path="/annonce/:annonceId"
						element={
							<>
								<Annonce />
								{(!error && loading && <LoadingScreen />) ||
									(error && loading && <Error />) ||
									(error404 && !loading && !error && (
										<Error404 />
									))}
							</>
						}
					/>
					{/* It tells the router to match the URL `/a-propos` and render the `<APropos />` component. */}
					<Route exact path="/a-propos" element={<APropos />} />
					{/* It tells the router to match any URL and render the `<Error404 />` component. */}
					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	)
}

export default Router
