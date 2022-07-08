import Emoji from "./Emoji";


class TEXT extends Emoji {
	constructor(props) {
		super(props);
	}

	render() {
		let decoratedText = this.addEmoji("Fart out Loud", "🔥🔥");
		return super.render(decoratedText);
	}
}

export default TEXT;
