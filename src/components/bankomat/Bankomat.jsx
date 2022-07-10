import React from 'react'
import BankomatTop from './bankomat-components/BankomatTop'
import visa from "../bankomat/img/visa.png"
import master from "../bankomat/img/master.png"
import "./Bankomat.css"
import Numbers from './bankomat-components/Numbers'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import Button from './bankomat-components/Button'
import { toggle } from "../../redux/slices/popupSlice"
export default function Bankomat() {

	const dispatch = useDispatch()
	const cards = useSelector((state) => {
		return state.cardsSliceReducer
	})
	const checkCardInBankomat = cards.filter((card) => {
		return card.inBankomat === true
	}).length
	function togglePopup() {
		dispatch(toggle())
	}
	return (
		<div className='bankomat-wrapper'>
			<div className="bankomat">

				<BankomatTop />

				<div className="bankomat-card flex aic">
					<div className="numbers">
						<Numbers />
					</div>
					<div className="card-and-type">
						<div className="card-block"></div>
						<div className="card-types">
							<img src={visa} alt="Visa" />
							<img src={master} alt="Master Card" />
						</div>
						<div className="enter-card"><Button text="ENTER CARD" disabled={checkCardInBankomat === 0 ? false : true} func={togglePopup} /></div>
					</div>
				</div>



			</div>
		</div>
	)
}
