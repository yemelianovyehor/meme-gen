import * as React from "react";
import Form from "@components/Form/Form";
import Meme from "@components/Meme/Meme";
import Header from "@components/Header/Header";
import "./App.css";
import { getRandomMeme } from "./MemesAPIHandler";

const App = () => {
	const [MemeObj, setMemeObj] = React.useState(getRandomMeme());

	function updateMeme() {
		console.log("new meme: " + getRandomMeme().url);
		setMemeObj(getRandomMeme());
	}

	return (
		<div className="container">
			<Header />
			<main>
				<Form buttonClickHandler={updateMeme} />
				<Meme meme={MemeObj} />
			</main>
		</div>
	);
};

export default App;
