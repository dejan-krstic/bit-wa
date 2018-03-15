const {registerForAlerts} = require('./memoryInfoChecker');

registerForAlerts(1, console.log);
registerForAlerts(1.9, (message) => {
    r = message.split(' ');
    console.log(r.splice(1).join(''));
});
registerForAlerts(1.1, (message) => {
    console.log(message.toUpperCase());
});
registerForAlerts(1.8, (message) => {
    console.log(message.slice(10)) });

