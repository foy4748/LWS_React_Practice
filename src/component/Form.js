import {Component} from 'react';

class Form extends Component {
	state = {title: '', placeholder: "Title", text: '', selected: 'Angular', toc: false};
	handleChange = (e) => {
		/*
		switch (e.target.type) {
			case "text":
				this.setState({title: e.target.value});
				break;
			case "textarea":
				this.setState({text: e.target.value});
				break;

			case "select-one":
				this.setState({selected: e.target.value});
				break;

			case "checkbox":
				this.setState({toc: e.target.checked})
				break;
			default:
				console.log("Nothing here");
		}
		 */
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const {placeholder, text, selected, toc, title} = this.state;
		console.log(placeholder, title, text, selected, toc);
		this.setState({title: '', toc: false, selected: "Angular", text: '', placeholder: "Sent"});
	}
	render() {
		const {placeholder, text, selected, toc, title} = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<hr />


				<input type="text" name="title" placeholder={placeholder} value={title} onChange={this.handleChange} />
				<br />
				<br />

				<textarea name="text" cols="10" rows="10" value={text} onChange={this.handleChange} placeholder="Description" />
				<br />
				<br />
				<select name="selected" value={selected} onChange={this.handleChange}>
					<option value={"React"}>React</option>
					<option value={"Angular"}>Angular</option>
				</select>
				<br />
				<br />
				<input name="toc" type="checkbox" checked={toc} onChange={this.handleChange} />
				<br />
				<br />
				<button type="submit">Submit</button>
				<hr />
			</form>
		);
	}
}

export default Form;
