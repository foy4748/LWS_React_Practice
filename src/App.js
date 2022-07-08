import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import ClockList from "./component/ClockList";
import Form from "./component/Form";
import CalculateTemperature from "./component/CalculateTemperature";
import TEXT from "./component/inheritance/Text";

function App() {
	//console.log("App Rendered");
	return (
		<div className="App">
			<ClockList quantities={[1, 2, 3]} />
			<Form />
			<CalculateTemperature />
			<TEXT />
		</div>
	);
}

export default App;
