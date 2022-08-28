import * as React from "react";
import "./Form.css";
import { Meme } from "@type/Meme";
// import { getRandomMeme } from "@api/MemesAPIHandler";
import { getRandomMeme } from "@api/MemesAPIHandler";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface FormProps {
	onMemeChange: React.Dispatch<React.SetStateAction<Meme>>;
	meme: Meme;
}

interface FormState {}
/* eslint-enable @typescript-eslint/no-empty-interface */

class Form extends React.Component<FormProps, FormState> {
	//state = { :  }

	changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const { name, value } = e.target as HTMLInputElement;
		// console.log(`Input event. ${name}: ${value}`);
		this.props.onMemeChange((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	getNewImage(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		// console.log("button event");
		this.props.onMemeChange({
			...getRandomMeme(),
			topText: "",
			bottomText: "",
		});
	}

	render() {
		return (
			<form onSubmit={(e) => this.getNewImage(e)}>
				<div className="text-inputs-wrapper">
					<input
						type="text"
						name="topText"
						className="text-input"
						placeholder="Top text"
						value={this.props.meme.topText}
						onChange={this.changeHandler}
					/>
					<input
						type="text"
						name="bottomText"
						className="text-input"
						placeholder="Bottom text"
						value={this.props.meme.bottomText}
						onChange={this.changeHandler}
					/>
				</div>
				<button type="submit" className="form-button">
					Get a new meme image
				</button>
			</form>
		);
	}
}

export default Form;
