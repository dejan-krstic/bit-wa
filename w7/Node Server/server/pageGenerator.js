const lorem = require('lorem-ipsum');
const Post = require('./dataModule');

const  titleGenerator = () => lorem({
        count: 3,
        units: "words"
    })    
const  pGenerator = () => lorem({
        count: 3,
        units: "sentences"
    })    


const pageGenerator = (num) => {
        let a = []
        for (let i = 0; i<num; i++ ){
            a.push(new Post(titleGenerator(),pGenerator())); 
        }
        return JSON.stringify(a);
}

module.exports = pageGenerator;