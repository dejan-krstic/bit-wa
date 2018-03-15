const os = require('os');

let free;
let handlerList = [];

const cycleStart = () => {
    setInterval(() => {
        free = os.freemem();
        handlerList.forEach((handler) => {
            handler(free/1073741824);
        })
    }, 1000);
}

const getFreeMemory = (handler) => {
    handlerList.push(handler);
}


module.exports = {
    cycleStart,
    getFreeMemory
}

