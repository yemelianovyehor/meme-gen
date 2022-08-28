import * as React from "react";
import Form from "@components/Form/Form";
import Meme from "@components/Meme/Meme";
import Header from "@components/Header/Header";
import "./App.css";
import { getRandomMeme } from "./APIHandlers/MemesAPIHandler";
import { Meme as MemeData } from "@type/Meme";

const App = () => {
	const initialMeme: MemeData = {
		...getRandomMeme(),
		topText: "",
		bottomText: "",
	};
	const [MemeData, setMemeData] = React.useState<MemeData>(initialMeme);

	return (
		<div className="container">
			<Header />
			<main>
				<Form meme={MemeData} onMemeChange={setMemeData} />
				<Meme meme={MemeData} />
			</main>
		</div>
	);
};

export default App;
