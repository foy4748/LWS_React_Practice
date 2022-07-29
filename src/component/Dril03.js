import React from "react";
import themeContext from "../context/themeContext";

export default class Dril03 extends React.Component {
  render() {
    return (
      <themeContext.Consumer>
        {({ theme }) => {
          console.log(theme);
          const style = {
            backgroundColor: theme === "dark" ? "#000000" : "FFFFFF",
            color: theme === "dark" ? "#FFFFFF" : "#000000",
          };
          const load = "test";
          return (
            <div style={style}>
              <p>Found this at Dril03 {load}</p>
            </div>
          );
        }}
      </themeContext.Consumer>
    );
  }
}
