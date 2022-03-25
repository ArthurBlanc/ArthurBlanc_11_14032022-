import React, { useState, useEffect } from 'react'

import loading from '../../assets/loading.gif'

import Error from '../Error'

import './style.scss'

function Loading() {
	/* Creating a state variable called `show` and setting it to `false`. */
	const [show, setShow] = useState(false)
	/* This is a state variable that will be used to show an error message. */
	const [error, setError] = useState(false)

	useEffect(() => {
		/* Set a timeout to delay the showing of the loading component. */
		const timeShow = setTimeout(() => {
			setShow(true)
		}, 500)

		/* A timeout to show error. */
		const timeError = setTimeout(() => {
			setError(true)
		}, 5000)

		return () => {
			clearTimeout(timeShow)
			clearTimeout(timeError)
		}
	}, [])

	if (!show) {
		return null
	}

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
