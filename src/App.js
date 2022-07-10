import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import ClockList from "./component/ClockList";
import Form from "./component/Form";
import CalculateTemperature from "./component/CalculateTemperature";

//Inheritance
import TEXT from "./component/inheritance/Text";

//Composition
import TextComp from "./component/composition/Text";
import EmojiComp from "./component/composition/Emoji";
import BracketComp from "./component/composition/Bracket";

//Learning HOC
import Counter from "./component/Counter";
import DoubleTapCounter from "./component/DoubleTapCount";

function App() {
	//console.log("App Rendered");
	return (
		<div className="App">
			<ClockList quantities={[1, 2, 3]} />
			<Form />
			<CalculateTemperature />
			<TEXT />
			<EmojiComp>
				{({addEmoji}) =>
					<BracketComp>
						{({addBracket}) => <TextComp addEmoji={addEmoji} addBracket={addBracket} />}
					</BracketComp>
				}
			</EmojiComp>
			<Counter />
			<DoubleTapCounter />
		</div>
	);
}

export default App;
