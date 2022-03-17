import React, { useState, useRef } from 'react'
import chevron from '../../assets/chevron.svg'

import './style.css'

function Accordion(props) {
	const [setActive, setActiveState] = useState('')
	const [setHeight, setHeightState] = useState('0px')
	const [setRotate, setRotateState] = useState('accordion__icon')

	const content = useRef(null)

	function toggleAccordion() {
		setActiveState(setActive === '' ? 'active' : '')
		setHeightState(
			setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
		)
		setRotateState(
			setActive === 'active'
				? 'accordion__icon'
				: 'accordion__icon rotate'
		)
	}

	const contentArray = []
	if (!Array.isArray(props.content)) {
		contentArray.push(props.content)
	} else {
		for (let i = 0; i < 9; i++) {
			contentArray.push(props.content[i])
		}
	}

	return (
		<div className="accordion__section">
			<button
				className={`accordion ${setActive}`}
				onClick={toggleAccordion}
			>
				<p className="accordion__title">{props.title}</p>
				<img src={chevron} className={`${setRotate}`} alt="" />
			</button>
			<div
				ref={content}
				style={{ maxHeight: `${setHeight}` }}
				className="accordion__content"
			>
				<div className="accordion__text">
					{contentArray.map((content, index) => (
						<div key={`${content}-${index}`}>{content}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Accordion
