function BoilingVerdict({temperature = 0}) {
	if (temperature < 100) {
		return <p> Water will NOT boil </p>
	}
	else if (temperature >= 100) {
		return <p> Water will boil </p>
	}
	else {
		return <p></p>
	}
}

export default BoilingVerdict;
