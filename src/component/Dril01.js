import React from "react";
import Dril02 from "./Dril02";

export default class Dril01 extends React.Component {
  render() {
    const { load, theme } = this.props;
    return (
      <div>
        <Dril02 load={load} theme={theme} />
      </div>
    );
  }
}
