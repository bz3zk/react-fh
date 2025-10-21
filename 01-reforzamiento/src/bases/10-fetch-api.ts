import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'YOUR API KEY';
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

const myRequest = fetch(URL);

const createImgInsideDom = (imageUrl:string) => {
    const imgElement = document.createElement('img');

    imgElement.src = imageUrl;
    document.body.append(imgElement);
};


myRequest
    .then((response) => response.json())
    .then(({data}:GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        
        createImgInsideDom(imageUrl);
    })
    .catch((err) => console.error(err));