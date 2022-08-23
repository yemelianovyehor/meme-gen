import * as React from "react";
import "./Form.css";
// import Memes from '/src/memes_loader'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface FormProps {
	buttonClickHandler: () => void;
}

interface FormState {}
/* eslint-enable @typescript-eslint/no-empty-interface */

class Form extends React.Component<FormProps, FormState> {
	//state = { :  }

	buttonClickHandler() {
		console.log("new meme");
	}

	render() {
		return (
			<div className="form">
				<div className="text-inputs-wrapper">
					<input
						type="text"
						name="top-text"
						className="text-input"
						id="top-text"
						placeholder="Top text"
					/>
					<input
						type="text"
						name="bottom-text"
						className="text-input"
						id="bottom-text"
						placeholder="Bottom text"
					/>
				</div>
				<input
					type="button"
					value="Get a new meme image"
					className="form-button"
					onClick={this.props.buttonClickHandler}
				/>
			</div>
		);
	}
}

export default Form;
