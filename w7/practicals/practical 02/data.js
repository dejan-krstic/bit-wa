export const fetchMovie = (url, handler) => {
    fetch(url)
     .then(response => response.json())
     .then(responseJSON => {
        handler(responseJSON.movie)
     })
    }
