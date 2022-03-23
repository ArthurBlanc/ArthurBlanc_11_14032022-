import Error from '../../components/Error'
import { useEffect } from 'react'

function Error404() {
	/* This is a React Hook, changing the title of the page. */
	useEffect(() => {
		document.title = '404 - Kasa'
	}, [])

	return (
		<Error
			title="404"
			subtitle="Oups! La page que "
			subtitle2="vous demandez n'existe pas."
		/>
	)
}

export default Error404
