import React from "react";
import Dril03 from "./Dril03";

export default class Dril02 extends React.Component {
  render() {
    const { load, theme } = this.props;
    console.log(theme);
    return (
      <div>
        <p>{"I'm not using any Load: Dril02"}</p>
        <p>Passing the load</p>
        <Dril03 load={load} theme={theme} />
      </div>
    );
  }
}
