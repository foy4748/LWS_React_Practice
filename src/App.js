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

//Drilling Props
import Dril01 from "./component/Dril01";

//For Context API
import themeContext from "./context/themeContext";

//useState Example
import StateHook from "./component/StateHook";

//useEffect Example
import EffectHook from "./component/EffectHook";

function App() {
  //console.log("App Rendered");
  return (
    <div className="App">
      <EffectHook />
      <ClockList quantities={[1, 2, 3]} />
      <Form />
      <CalculateTemperature />
      <TEXT />
      <EmojiComp>
        {({ addEmoji }) => (
          <BracketComp>
            {({ addBracket }) => (
              <TextComp addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </BracketComp>
        )}
      </EmojiComp>
      <Counter />
      <DoubleTapCounter />
      {/*<Dril01 load={"How my fart smells? Eh?"} theme={{ theme: "dark" }} />*/}
      <themeContext.Provider value={{ theme: "dark" }}>
        <Dril01 />
      </themeContext.Provider>

      <StateHook />
    </div>
  );
}

export default App;
