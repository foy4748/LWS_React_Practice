import React from "react";

class BracketComp extends React.Component {
	addBracket = (txt) => {
		return `[ ${txt} ]`;
	};


	render() {
		return this.props.children({addBracket: this.addBracket});
	}
}

export default BracketComp;

