import * as React from "react";
import Form from "@components/Form/Form";
import Meme from "@components/Meme/Meme";
import Header from "@components/Header/Header";
import "./App.css";
import { getRandomMeme, getMemes } from "./APIHandlers/MemesAPIHandler";
import { Meme as MemeData } from "@type/Meme";

const App = () => {
	const [memes, setMemes] = React.useState<MemeData[]>([]);

	const initialMeme: MemeData = {
		id: "0-loader",
		url: "src/assets/img/spinner.gif",
		name: "loading spinner",
		topText: "",
		bottomText: "",
	};
	const [randomMeme, setRandomMeme] = React.useState<MemeData>(initialMeme);

	React.useEffect(() => {
		getMemes().then((res) => setMemes(res));
	}, []);

	React.useEffect(
		() =>
			setRandomMeme({ ...getRandomMeme(memes), topText: "", bottomText: "" }),
		[memes]
	);

	function getNewMeme(){
		setRandomMeme({...getRandomMeme(memes),topText:"",bottomText:""});
	}

	return (
		<div className="container">
			<Header />
			<main>
				<Form meme={randomMeme} onMemeChange={setRandomMeme} getNewMeme={getNewMeme} />
				<Meme meme={randomMeme} />
			</main>
		</div>
	);
};

export default App;
