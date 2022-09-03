import { Meme } from "@type/Meme";
import { imgFlipResponse } from "../types/imgFlipResponse";

async function fetchMemes(url: string): Promise<imgFlipResponse> {
	const res = await fetch(url).then((response) => checkForErrors(response));
	//.catch((error) => console.log("Catched: " + error));
	if (res) {
		return await res.json();
	} else {
		return { success: false };
	}
}

function checkForErrors(response: Response) {
	if (response.ok) {
		const isJson =
			response.headers.get("contet-type") === "application/json;charset=UTF-8";
		if (!isJson) {
			return response;
		} else {
			throw new Error("Response is not application/json.");
		}
	} else {
		throw new Error(`Problem with API: ${response.json()}`);
	}
}

async function getMemes(): Promise<Meme[]> {
	const response: imgFlipResponse = await fetchMemes(
		"https://api.imgflip.com/get_memes"
	);

	if (response.success) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const memes = response.data!.memes;
		return memes.map((item) => {
			return {
				id: item.id,
				name: item.name,
				url: item.url,
				topText: "",
				bottomText: "",
			};
		});
	} else {
		return Promise.reject("Error");
	}
}

function getRandomMeme(memes: Meme[]): Pick<Meme, "id" | "name" | "url"> {
	try {
		return memes[Math.floor(Math.random() * 100)];
	} catch (e) {
		console.log(e);
		return {
			id: "error",
			name: "Gonza Moreira's 404",
			url: "src/assets/img/Error.png",
		};
	}
}

export { getRandomMeme, getMemes };
export type { Meme };
