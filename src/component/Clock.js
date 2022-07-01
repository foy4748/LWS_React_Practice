import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString(), locale: "ar-EG" };
  }

  tick = () => {
    this.setState({ time: new Date().toLocaleTimeString(this.state.locale) });
  };

  timer = () =>
    setInterval(() => {
      this.tick();
    }, 1000);

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  changeLocale = () => {
    this.setState({
      locale: this.state.locale === "ar-EG" ? "en-US" : "ar-EG",
    });
  };

  handleClick = () => {
    this.changeLocale();
  };

  render() {
    const { time } = this.state;
    //console.log("Clock Rendered");
    return (
      <div>
        <span>{time}</span>
        <br />
        <Button change={this.handleClick} />
      </div>
    );
  }
}

export default Clock;
