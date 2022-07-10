import Bankomat from "./components/bankomat/Bankomat";
import Popup from "./components/bankomat/popup/Popup";
import { useSelector } from "react-redux/es/exports"

function App() {
	const status = useSelector((state) => {
		return state.popupSliceReducer
	})
	return (
		<div className="App">
			{status ? <Popup /> : ""}
			<Bankomat />
		</div>
	);
}

export default App;
