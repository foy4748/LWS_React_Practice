import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import InputTemperature from "./InputTemperature";
import convert from "../lib/convert";

class CalculateTemperature extends Component {
  state = { temperature: 0, scale: "c" };

  handleChange = (e, scale) => {
    this.setState({ temperature: e.target.value, scale });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert.toCelsius(temperature) : temperature;
    const farenheit =
      scale === "c" ? convert.toFarenheit(temperature) : temperature;
    return (
      <div>
        <InputTemperature
          scale={"c"}
          temperature={celsius}
          handleTempChange={this.handleChange}
        />
        <InputTemperature
          scale={"f"}
          temperature={farenheit}
          handleTempChange={this.handleChange}
        />
        <BoilingVerdict temperature={parseFloat(celsius)} />
      </div>
    );
  }
}

export default CalculateTemperature;
