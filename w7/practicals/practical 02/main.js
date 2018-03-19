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

var startGettingMovie = function (url, onGotMovieHandlerFunction){
    fetch(url)
        .then(function(httpResponse){
            return httpResponse.json()
        })
        .then(function(rawMovieObject){
            var movie = {
                name: rawMovieObject.name,
                id: rawMovieObject.id
            };
            onGotMovieHandlerFunction(movie);
        })
}

// main module
var onGotMovieHandlerFunction = function(movie){
    console.log("name: " + movie.name);
}

var url = "http://api.tvmaze.com/shows/4";

startGettingMovie(url, onGotMovieHandlerFunction);
console.log("other work");

// data module
var startGettingMovie = function (url){
    return fetch(url)
        .then(function(httpResponse){
            return httpResponse.json()
        })
        .then(function(rawMovieObject){
            var movie = {
                name: rawMovieObject.name,
                id: rawMovieObject.id
            };
            return movie;
        });
}

// main module
var onGotMovieHandlerFunction = function(movie){
    console.log("name: " + movie.name);
}

var url = "http://api.tvmaze.com/shows/4";

startGettingMovie(url)
    .then(function(movie){
        console.log("name: " + movie.name);
    });

console.log("other work");







var httpGet = function(url, callbackKojiOcekujeXHResponse){
    setTimeout(()=>{
        callbackKojiOcekujeXHResponse(url.toResponse());
    }, 10000);
}

var getMovieAsync = function(url, callbackKojiOcekujeMovie){
    httpGet(url, (xhrResponse)=>{
        callbackKojiOcekujeMovie(xhrResponse.toMovie());
    });
}

getMovieAsync("http://...", (movie)=>{
    console.log(movie);
});





var startGettingMovie = function (url, onGotMovieHandlerFunction){
    fetch(url)
        .then(function(httpResponse){
            return httpResponse.json()
        })
        .then(function(rawMovieObject){
            var movie = {
                name: rawMovieObject.name,
                id: rawMovieObject.id
            };
            onGotMovieHandlerFunction(movie);
        })
}

// main module
var onGotMovieHandlerFunction = function(movie){
    console.log("name: " + movie.name);
}

var url = "http://api.tvmaze.com/shows/4";

startGettingMovie(url, onGotMovieHandlerFunction);
console.log("other work");