import React from 'react'
import { useSelector } from 'react-redux'
import Success from './Success'
export default function CheckCardPassword({ card }) {
	const successCard = useSelector((state) => {
		return state.cardsSliceReducer.filter((card) => {
			return card.success === true
		}).length
	})

	if (successCard === 0) {
		return (
			<div className='check-card-password'>
				<h1>Enter Password</h1>
				<input type="password" disabled value={card.checkPassword} />
			</div>
		)
	}
	else {
		return (
			<Success card={card} />
		)
	}

}
