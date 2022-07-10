import React from 'react'
import TopButtons from './TopButtons'
import { useSelector, useDispatch } from 'react-redux'
import "./screenPages/Pages.css"
import Home from './screenPages/Home'
import { cancel } from "../../../redux/slices/cardsSliceReducer"
import CheckCardPassword from './screenPages/CheckCardPassword'

export default function BankomatTop() {
	const dispatch = useDispatch()
	const cards = useSelector((state) => {
		return state.cardsSliceReducer
	})
	const inBankomat = cards.filter((card) => {
		return card.inBankomat === true
	}).length

	function exit() {
		dispatch(cancel())
	}

	return (
		<div className="bankomat-top flex">
			<div className='left-buttons'>
				<TopButtons text=">" exit={exit} />
			</div>
			<div className='bankomat-screen'>
				{inBankomat ? "" : <Home />}
				{cards.map((card) => {

					if (card.inBankomat === true) {
						return <CheckCardPassword card={card} key={card.number} />
					}
					else {
						return false
					}

				})}
			</div>
			<div className='right-buttons'>
				<TopButtons text="<" />
			</div>
		</div>
	)
}
