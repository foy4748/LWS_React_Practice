import React, {Component} from 'react';
import BoilingVerdict from './BoilingVerdict';
import InputTemperature from './InputTemperature';

class CalculateTemperature extends Component {
	render() {
		const temperature = 0;
		return (
			<div>
				<InputTemperature scale={'c'} />
				<InputTemperature scale={'f'} />
				<BoilingVerdict temperature={parseFloat(temperature)} />
			</div>
		)
	}
}

export default CalculateTemperature;
