import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'YOUR API KEY';
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

const createImgInsideDom = (imageUrl:string) => {
    const imgElement = document.createElement('img');

    imgElement.src = imageUrl;
    document.body.append(imgElement);
};

const getRandomGifUrl = async(): Promise<string> => {
    const response = await fetch(URL);
    const {data}:GiphyRandomResponse = await response.json();

    return data.images.original.url;
};

getRandomGifUrl()
    .then((url) => createImgInsideDom(url))
    // .then((url) => createImgInsideDom) // opcion valida
    .catch((err) => console.error(err));