import {getData} from './data.js';
import {displayData} from './ui.js';

const url = 'http://127.0.0.1:3002'


getData(url)    
.then((obj) => {
    console.log(obj);
    displayData(obj);
})
.catch((error) => {
    console.log(`Something went wrong! ${error.message}`);
})