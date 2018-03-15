import { getData } from './data.js';
import { displayData } from './ui.js';
import { url } from './constants.js'

export const startGettingData = () => {
    return getData(url)
        .then((obj) => {
            displayData(obj);
        })
        .catch((error) => {
            console.log(`Something went wrong! ${error.message}`);
        })
}