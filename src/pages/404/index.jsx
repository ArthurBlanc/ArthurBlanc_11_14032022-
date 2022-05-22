import { useEffect, useState } from 'react'

import Error from '../../components/Error'

function Error404() {
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
