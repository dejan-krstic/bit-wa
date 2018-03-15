const { cycleStart, getFreeMemory } = require('./memoryInfo');

cycleStart();

const registerForAlerts = (limit, callback) => {
    getFreeMemory((freeMem) => {
        if (freeMem < limit) {
            callback(`Warning! Only ${freeMem.toFixed(2)}GB left!`);
        }
    });
}

module.exports = {
    registerForAlerts
}

//--------------------------------------------------------
// Doing with Promise
//--------------------------------------------------------

/* let registerForAlerts = (limit) => {
    new Promise((resolve, reject) => {

        resolve([limit, freeMem]);
    })
    .then((value) => {
        if (value.limit > value.freeMem) {
           return value.freeMem;
        }
    })
} */