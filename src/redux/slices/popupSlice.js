import { createSlice } from "@reduxjs/toolkit"

const initialState = false

const popupSlice = createSlice({
	name: "popup",
	initialState,
	reducers: {
		toggle(state) {
			return state = !state

		}
	}
})

export const { toggle } = popupSlice.actions


export default popupSlice.reducer