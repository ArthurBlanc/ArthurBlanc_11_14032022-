import React, { useState, createContext, useEffect } from 'react'

export const AnnoncesContext = createContext()

export const AnnoncesProvider = ({ children }) => {
	/* Creating a state variable `annonces` and initializing it with an empty array. */
	const [annonces, setAnnonces] = useState([])
	/* Creating a state variable `loading` and initializing it with `true`. */
	const [loading, setLoading] = useState(false)
	/* Creating a state variable `error` and initializing it with `false`. */
	const [error, setError] = useState(false)
	/* Creating a state variable `error404` and initializing it with `false`. */
	const [idAnnonce, setIdAnnonce] = useState(false)
	/* Creating a state variable `error404` and initializing it with `false`. */
	const [error404, setError404] = useState(false)

	useEffect(() => {
		setLoading(true)
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
		<AnnoncesContext.Provider
			value={{
				annonces,
				setAnnonces,
				loading,
				setLoading,
				error,
				setError,
				idAnnonce,
				setIdAnnonce,
				error404,
				setError404,
			}}
		>
			{children}
		</AnnoncesContext.Provider>
	)
}
