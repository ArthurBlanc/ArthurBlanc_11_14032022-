import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import APropos from './pages/A-Propos'
import Logement from './pages/Logement'

import './style.scss'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				{/* This is a route definition. It tells the router to match the URL `/` and render the `<Home />` component. */}
				<Route exact path="/" element={<Home />} />
				{/* It tells the router to match the URL `/a-propos` and render the `<APropos />` component. */}
				<Route path="/a-propos" element={<APropos />} />
				{/* It tells the router to match the URL `/logement/:logementId` and render the `<Logement />` component. */}
				<Route path="/logement/:logementId" element={<Logement />} />
				{/* It tells the router to match any URL and render the `<Error404 />` component. */}
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
