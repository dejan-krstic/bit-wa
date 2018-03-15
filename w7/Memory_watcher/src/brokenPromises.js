const os = require('os');
const a = [];
let i = 0;

const interval = setInterval(() => {
    a[i++] = new Promise ((resolve, reject) => {
    const free = os.freemem();
    
    resolve(free)
     
    })
    .then ((response) => {
        console.log(response)
        return response; 
    }) 
    .catch((error) => {
        console.log('not good')
    }) 
}, 100);

// const unResolvedPromises = a.map(elem => elem.then(response => response);

a[10].then(resolve => resolve)
setTimeout(() => {
    console.log(a);
 
    clearInterval(interval);
 }, 3000);
