import React, { useState, useEffect } from 'react'

import loading from '../../assets/loading.gif'

import Error from '../Error'

import './style.scss'

function Loading() {
	/* This is a state variable that will be used to show an error message. */
	const [error, setError] = useState(false)

	useEffect(() => {
		/* A timeout to show error. */
		const timeError = setTimeout(() => {
			setError(true)
		}, 5000)

		return () => {
			clearTimeout(timeError)
		}
	}, [])

	if (error) {
		return (
			<Error subtitle="Oops, une erreur est survenue lors du chargement." />
		)
	}

	return (
		<div className="loading">
			<img src={loading} alt="Loading" />
		</div>
	)
}

export default Loading
