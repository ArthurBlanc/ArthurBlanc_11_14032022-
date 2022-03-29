import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'

import { AnnoncesProvider } from './context'

/* Rendering the App component into the root element of the index.html file. */
ReactDOM.render(
	<AnnoncesProvider>
		<Router />
	</AnnoncesProvider>,
	document.getElementById('root')
)
