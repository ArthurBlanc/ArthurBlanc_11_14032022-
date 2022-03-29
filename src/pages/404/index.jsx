import { useEffect, useState, useContext } from 'react'

import { AnnoncesContext } from '../../context'

import Error from '../../components/Error'

function Error404() {
	const { idAnnonce, setError404 } = useContext(AnnoncesContext)

	/* Setting the title of the page. */
	document.title = '404 - Kasa'
	/* Creating a state variable called `show` and setting it to `false`. */
	const [show, setShow] = useState(false)

	useEffect(() => {
		/* Set a timeout to delay the showing of the loading component. */
		const timeShow = setTimeout(() => {
			setShow(true)
		}, 10)
		return () => {
			clearTimeout(timeShow)
		}
	}, [])

	useEffect(() => {
		if (idAnnonce) {
			setError404(false)
		}
		return () => setError404(false)
	}, [setError404, idAnnonce])

	if (!show) {
		return null
	}

	return (
		<Error
			title="404"
			subtitle="Oups! La page que "
			subtitle2="vous demandez n'existe pas."
		/>
	)
}

export default Error404
