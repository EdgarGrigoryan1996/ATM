import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsSliceReducer from "./slices/cardsSliceReducer";
import popupSliceReducer from "./slices/popupSlice"
const rootReducer = combineReducers({
	popupSliceReducer,
	cardsSliceReducer,
})
const store = configureStore({
	reducer: rootReducer,
})

export default store