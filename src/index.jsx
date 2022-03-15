import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import APropos from './pages/A-Propos'
import Logement from './pages/Logement'

import './style.css'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/a-propos" element={<APropos />} />
				<Route path="/logement/:logementId" element={<Logement />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
