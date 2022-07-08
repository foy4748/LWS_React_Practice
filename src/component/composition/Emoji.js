import React from "react";

class EmojiComp extends React.Component {
	addEmoji = (txt, emoji) => {
		return `${emoji} ${txt} ${emoji}`;
	};


	render() {
		return this.props.children({addEmoji: this.addEmoji});
	}
}

export default EmojiComp;
