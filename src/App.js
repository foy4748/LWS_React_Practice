import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import ClockList from "./component/ClockList";
import Form from "./component/Form";
import CalculateTemperature from "./component/CalculateTemperature"; 

function App() {
	//console.log("App Rendered");
	return (
		<div className="App">
			<ClockList quantities={[1, 2, 3]} />
			<Form />
	<CalculateTemperature />
		</div>
	);
}

export default App;
