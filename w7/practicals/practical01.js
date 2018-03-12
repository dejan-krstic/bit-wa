/* let arr100 = Array(100).fill().map((v, i) => i);
console.log(arr100); */

let arr100 = Array(100).fill().map((v, i) => i).map((elem, i) => new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log(`waiting...${i}`);
        resolve();
    }, parseInt(Math.random()*500));
}))

arr100.forEach((elem, i) => {
    elem.then(() => {
        console.log(`done...${i}`);
    })
})