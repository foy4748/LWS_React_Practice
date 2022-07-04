import React, { Component } from "react";

class InputTemperature extends Component {
    state = { temperature: '' };
    handleTempChange = (e) => {
        this.setState({ temperature: e.target.value });
    }
    scales = { c: "Celsius", f: "Farenheit" }

    render() {
        const { temperature } = this.state;
        const { scale } = this.props;
        const currentScale = this.scales[scale];
        return (
            <fieldset>
                <legend>Enter temperature in {currentScale}</legend>
                <input type="text" value={temperature} onChange={this.handleTempChange} />
            </fieldset>

        );
    }
}

export default InputTemperature;



  
