import React from "react";

export default class Dril03 extends React.Component {
  render() {
    const { load, theme } = this.props;
    const style = {
      backgroundColor: theme.theme === "dark" ? "#000000" : "FFFFFF",
      color: theme.theme === "dark" ? "#FFFFFF" : "#000000",
    };
    return (
      <div style={style}>
        <p>Found this at Dril03 {load}</p>
      </div>
    );
  }
}
