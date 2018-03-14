// data module
var startGettingMovie = function (url){
    return fetch(url)      // immediately returns promise pending 
        .then(function(httpResponse){  // httpResponse is initial response caught, wrapped in a promise
            return httpResponse.json()  // returns javascript object wrapped in promise
        })
        .then(function(rawMovieObject){  //gets promise from previous then - rawMovieObject
            var movie = {                 // rawMovieObject is unwrapped immediately 
                name: rawMovieObject.name,
                id: rawMovieObject.id
            };
            return movie;  // returns movie object , but wraps it in initial fetch promise 
        });
}

// main module
var onGotMovieHandlerFunction = function(movie){
    console.log("name: " + movie.name);
}

var url = "http://api.tvmaze.com/shows/4";

startGettingMovie(url)
    .then(function(movie){      // unwraps movie promise from initial fetch 
        console.log("name: " + movie.name);
    });

console.log("other work");