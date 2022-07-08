function TextComp({addEmoji, addBracket}) {
	let txt = "I'm JavaScript";
	if (addEmoji) {
		txt = addEmoji(txt, "🔥");
	}
	if (addBracket) {
		txt = addBracket(txt);
	}
	return <p>{txt}</p>
}

export default TextComp;
