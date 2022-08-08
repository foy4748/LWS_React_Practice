import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

//useRef Example
import RefHook from "./component/RefHook";

//useReducer Example
import ReducerHook from "./component/ReducerHook";

//Importing Navbar
import Navbar from "./component/Navbar";

function App() {
  //console.log("App Rendered");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ClockList quantities={[1, 2, 3]} />} />
          <Route path="/cat-fact" element={<EffectHook />} />
          <Route path="/form" element={<RefHook />}>
            <Route path="form2" element={<Form />} />
          </Route>
          <Route
            path="/emoji"
            element={
              <EmojiComp>
                {({ addEmoji }) => (
                  <BracketComp>
                    {({ addBracket }) => (
                      <TextComp addEmoji={addEmoji} addBracket={addBracket} />
                    )}
                  </BracketComp>
                )}
              </EmojiComp>
            }
          />
          <Route path="/reducer-hook" element={<ReducerHook />} />
          <Route path="/temperature" element={<CalculateTemperature />} />
          <Route path="/text" element={<TEXT />} />
          <Route
            path="/counters"
            element={
              <>
                <Counter /> <DoubleTapCounter />
              </>
            }
          />
          <Route
            path="/context-api"
            element={
              <themeContext.Provider value={{ theme: "dark" }}>
                {/*<Dril01 load={"How my fart smells? Eh?"} theme={{ theme: "dark" }} />*/}
                <Dril01 />
              </themeContext.Provider>
            }
          />
          <Route path="/state-hook" element={<StateHook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
