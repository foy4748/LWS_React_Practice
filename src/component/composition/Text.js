function TextComp({addEmoji}) {
	let txt = "I'm JavaScript";
	return <p>{addEmoji ? addEmoji(txt, "🔥") : txt}</p>
}

export default TextComp;
