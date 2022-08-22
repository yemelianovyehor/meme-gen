interface imgFlipResponse {
    success: boolean
    data: {
        memes: {
            id: string,
            name: string,
            url: string,
            width: number,
            height: number,
            box_count: number
        }[]
    }
}

interface minMemeData {
    id: string,
    name: string,
    url: string,
    topText: "",
    bottomText: ""
}

async function getMemes(): Promise<minMemeData[]> {
	const response: imgFlipResponse = await (await fetch("https://api.imgflip.com/get_memes")).json();
	const memes = await response.data.memes;
	return memes.map(item => {
		return {
			id: item.id,
			name: item.name,
			url: item.url,
			topText: "",
			bottomText: ""
		};
	});
}

const allMemeObjs = await getMemes();

function getRandomMeme() {
	return allMemeObjs[Math.floor(Math.random() * 100)];
}

// const Memes = await getMemes()
// console.log("Memes are called and work fine")


export { getRandomMeme};
export type { minMemeData };