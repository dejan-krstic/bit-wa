import Post from './entities.js';
import { getResponse } from './service.js';

export const getData = (url) => {
    return getResponse(url)
        .then((arrayOfObjects) => {
            let mapped = arrayOfObjects.map((elem) => new Post(elem.title, elem.lead, elem.id));
            return mapped;
        })
        .catch((error) => {
            console.log(`Oops, something went wrong! ${error.message}`)
        })
}