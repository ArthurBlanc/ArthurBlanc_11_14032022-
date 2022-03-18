import React, { useState, useRef } from 'react'
import chevron from '../../assets/chevron.svg'

import './style.scss'

function Accordion(props) {
	/* This is setting the initial state of the accordion. */
	const [setActive, setActiveState] = useState('')
	/* This is setting the initial height of the accordion to 0px. */
	const [setHeight, setHeightState] = useState('0px')
	/* This is setting the initial state of the rotate class. */
	const [setRotate, setRotateState] = useState('accordion-icon')

	const content = useRef(null)

	/**
	 * The function toggles the accordion by changing the active state, the height state, and the rotate
	 * state
	 */
	function toggleAccordion() {
		setActiveState(setActive === '' ? 'active' : '')
		setHeightState(
			setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
		)
		setRotateState(
			setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
		)
	}

	/* This is a way to check if the content is an array or not. If it is not an array, it will push the
	content into the contentArray. If it is an array, it will loop through the array and push each item into
	the contentArray. */
	const contentArray = []
	if (!Array.isArray(props.content)) {
		contentArray.push(props.content)
	} else {
		for (let i = 0; i < 9; i++) {
			contentArray.push(props.content[i])
		}
	}

	return (
		<div className="accordion-section">
			{/* This is the button that is used to toggle the accordion. */}
			<button
				className={`accordion ${setActive}`}
				onClick={toggleAccordion}
			>
				<span className="accordion-title">{props.title}</span>
				<img src={chevron} className={`${setRotate}`} alt="" />
			</button>
			<div
				ref={content}
				style={{ maxHeight: `${setHeight}` }}
				className="accordion-content"
			>
				<div className="accordion-text">
					{contentArray.map((content, index) => (
						<div key={`${content}-${index}`}>{content}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Accordion
