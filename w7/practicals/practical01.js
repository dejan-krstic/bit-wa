/* let arr100 = Array(100).fill().map((v, i) => i);
console.log(arr100); */

let arr100 = Array(100).fill().map((v, i) => i).map((elem, i) => new Promise ((resolve, reject) => {

        console.log(`waiting...${i}`);
        let mr = Math.random()>0.4;
        console.log(mr);
        if (mr){
        resolve(454);
        } else {
        reject("greska: 5");
        }
    
 
}))

arr100.forEach((elem, i) => {
    elem.then((res) => {
        console.log(`done...${i}`);
    }, (err) => {
        console.log(`help!  ${i}`);
    })
    elem.catch (() => {
        console.log(`help! 2  ${i}`);
    })
})



const k = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log(`hiiiiiii!`);
        resolve();
    }, 1000);
})

k.then(() => {
    console.log('byeeeee!');
}) 
const j = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log(`hiiiiiii! 2`);
        resolve();
    }, 500);
})

j.then(() => {
    console.log('byeeeee! 2');
}) 
//------

const bla = () => {console.log('blabla'); return 'babla'}

const l = new Promise ((resolve, reject) => {
    bla();
    let n = resolve;
    resolve(7);
    console.log('n = '+n);
})


const m = l.then((x) => console.log(x))

const a = l.then((x) => console.log(x))

