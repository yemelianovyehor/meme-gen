import * as React from "react";
import "./Meme.css";
import { Meme as MemeData } from "src/APIHandlers/MemesAPIHandler";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface MemeProps {
	meme: MemeData;
}
interface MemeState {}
/* eslint-enable @typescript-eslint/no-empty-interface */

class Meme extends React.Component<MemeProps, MemeState> {
	// state = { :  }
	
	
	render() {
		return (
			<div className="meme--container">
				<img
					src={this.props.meme.url}
					title={this.props.meme.name}
					className="meme--img"
				/>
				<h2 className="meme--text top">{this.props.meme.topText}</h2>
				<h2 className="meme--text bottom">{this.props.meme.bottomText}</h2>
			</div>
		);
	}
}

export default Meme;
