class Post {
    constructor(title, lead, id) {
        this.title = title;
        this.lead = lead;
        this.id = id;
    }
}

export const getData = (url) => {
    return fetch(url)
        .then((response) => {
            console.log(response);
            return response.json()
        })
        .then((resJ) => {
            console.log(resJ);
            let mapped = resJ.map((elem) => new Post(elem.title, elem.lead, elem.id));
            console.log(mapped);
            return mapped;
        });
}