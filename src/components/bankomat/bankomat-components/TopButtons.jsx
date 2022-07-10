import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'
export default function TopButtons({ text, exit, cash, balance, changePin }) {

	const success = useSelector((state) => {
		return state.cardsSliceReducer.filter((card) => {
			return card.success === true
		}).length
	})


	return (
		<div className='top-buttons'>
			<Button text={text} />
			<Button text={text} />
			<Button text={text} func={success === 0 ? null : exit} />
		</div>
	)
}
