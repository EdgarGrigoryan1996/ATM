import React, { useState } from 'react'
import Button from '../bankomat-components/Button'
import { toggle } from "../../../redux/slices/popupSlice"
import { inBankomat } from "../../../redux/slices/cardsSliceReducer"
import { useDispatch } from 'react-redux/es/exports'
import "./Popup.css"

export default function Popup() {
	const dispatch = useDispatch()

	function togglePopup() {
		dispatch(toggle())
	}

	function checkCardNumber() {

		dispatch(inBankomat({
			number: cardNumber
		}))

		dispatch(toggle())

	}

	const [cardNumber, setCardNumber] = useState("")
	return (
		<div className='popup'>
			<div className="popup-wrapper">
				<div className="popup-block">
					<div className="content flex aic">
						<div className="card-number">
							<input type="text"
								placeholder='Enter Card'
								value={cardNumber}
								onChange={(e) => {
									setCardNumber(e.target.value)
								}} />
						</div>
						<div className="buttons">
							<Button text="ENTER" func={checkCardNumber} />
							<Button text="CANCEL" func={togglePopup} />
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
