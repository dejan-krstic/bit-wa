// var url = "http://api.tvmaze.com/shows";
// var url = './indexData.html';
// var httpGet = function(url, callbackKojiOcekujeXHResponse){
//     setTimeout(()=>{
//         callbackKojiOcekujeXHResponse(url.toResponse());
//     }, 10000);
// }

// var getMovieAsync = function(url, callbackKojiOcekujeMovie){
//     httpGet(url, (xhrResponse)=>{
//         callbackKojiOcekujeMovie(xhrResponse.toMovie());
//     });
// }

// getMovieAsync("http://...", (movie)=>{
//     console.log(movie);
// });

import * as data from './data'


// main module 
const movieObject = (url, callback, handler) => {
    console.log('good afternoon')
    callback(url, handler)
    
}

const onSuccessHandler = (response) => {   
    console.log(response);     
}

movieObject(url, fetchMovie, onSuccessHandler); 