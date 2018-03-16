const a = new Promise ((resolve, reject) => {
    const urlGet =$.get("http://api.tvmaze.com/shows/5")
    
    setTimeout(()=>console.log(urlGet.responseJSON),500);
    console.log('1');
    console.log(urlGet)
    console.log(1.5);
    console.log(urlGet.responseJSON)
    // console.log(a);
    
     
    })
    
    .then (response => {
        console.log('2');
        console.log(a);
        console.log(response.name)
        return response; 
    }) 
    .catch(error => {
        console.log('not good')
    }) 
console.log('other work');