import { createSlice } from "@reduxjs/toolkit"
const initialState = [
	{
		number: "123456789",
		password: "1234",
		checkPassword: "",
		cash: 300000,
		inBankomat: false,
		success: false
	},
	{
		number: "458721658",
		password: "1234",
		checkPassword: "",
		cash: 300000,
		inBankomat: false,
		success: false
	},
	{
		number: "587963215",
		password: "1234",
		checkPassword: "",
		cash: 300000,
		inBankomat: false,
		success: false
	},
	{
		number: "025458958",
		password: "1234",
		checkPassword: "",
		cash: 300000,
		inBankomat: false,
		success: false
	}
]

export const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		inBankomat(state, action) {
			return state.map((card) => {
				if (action.payload.number === card.number) {
					return {
						...card,
						inBankomat: true
					}
				}
				else {
					return {
						...card,
						inBankomat: false
					}
				}
			})
		},
		cancel(state) {
			return state.map((card) => {
				return {
					...card,
					inBankomat: false,
					success: false,
					checkPassword: ""
				}
			})
		},
		enterPass(state, action) {
			return state.map((card) => {
				if (action.payload.number === card.number) {
					return {
						...card,
						checkPassword: card.checkPassword + action.payload.pass
					}
				}
				else {
					return card
				}
			})
		},
		checkPass(state, action) {
			return state.map((card) => {
				if (action.payload.number === card.number) {
					return {
						...card,
						success: true
					}
				}
				else {
					return card
				}
			})
		}
	}
})

export const { inBankomat, cancel, enterPass, checkPass } = cardsSlice.actions

export default cardsSlice.reducer