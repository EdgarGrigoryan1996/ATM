import React from 'react'
import Button from './Button'
import { cancel, enterPass, checkPass } from "../../../redux/slices/cardsSliceReducer"
import { useDispatch, useSelector } from 'react-redux/es/exports'

export default function Numbers() {

	const bankomatCard = useSelector((state) => {
		return state.cardsSliceReducer.filter((card) => {
			return card.inBankomat === true
		})[0]
	})
	const dispatch = useDispatch()
	function outCard() {
		dispatch(cancel())
	}

	function getNumber(e) {
		dispatch(enterPass({
			number: bankomatCard.number,
			pass: e.target.value
		}))
	}

	function checkPassword() {
		if (bankomatCard.password === bankomatCard.checkPassword) {
			dispatch(checkPass({
				number: bankomatCard.number
			}))
		}
		else {
			alert("error")
		}
	}



	return (

		<div className="numbers-block">
			<Button text="1" func={getNumber} />
			<Button text="2" func={getNumber} />
			<Button text="3" func={getNumber} />
			<Button text="4" func={getNumber} />
			<Button text="5" func={getNumber} />
			<Button text="6" func={getNumber} />
			<Button text="7" func={getNumber} />
			<Button text="8" func={getNumber} />
			<Button text="9" func={getNumber} />
			<Button text="0" func={getNumber} />
			<Button text="ENTER" func={checkPassword} />
			<Button text="CANCEL" func={outCard} />
		</div>

	)
}
