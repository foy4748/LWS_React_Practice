import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: nextChange } = nextProps;
    const { change: currentChange } = this.props;

    if (nextChange === currentChange) {
      return false;
    }
  }
  render() {
    //console.log("Button Rendered");
    const { change } = this.props;
    return <button onClick={change}>Change Locale</button>;
  }
}

export default Button;
