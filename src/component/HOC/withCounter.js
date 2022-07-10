import React, {Component} from 'react';

const withCounter = (PrevComponent) => {

	class NewComponent extends Component {
		state = {count: 0};
		handleCount = () => {
			this.setState((prevState) => {
				return {count: prevState.count + 1}
			});
		}

		render() {
			let {count} = this.state;
			return <PrevComponent count={count} handleCount={this.handleCount} />
		}
	}

	return NewComponent;
}

export default withCounter;
