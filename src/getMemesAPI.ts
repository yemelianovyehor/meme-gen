interface imgFlipResponse{
    success:boolean
    data: {memes:{
        id:string,
        name:string,
        url:string,
        width:number,
        height:number,
        box_count:number
    }[]}
}

async function getMemes() {
    let response : imgFlipResponse = await (await fetch("https://api.imgflip.com/get_memes")).json()
    let memes = await response.data.memes
    return memes
}

// const Memes = await getMemes()
// console.log("Memes are called and work fine")


export {getMemes}