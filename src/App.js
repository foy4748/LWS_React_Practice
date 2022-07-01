import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import ClockList from "./component/ClockList";

function App() {
  //console.log("App Rendered");
  return (
    <div className="App">
      <ClockList quantities={[1, 2, 3]} />
    </div>
  );
}

export default App;
