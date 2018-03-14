const figletApp = require('figlet');

const drawLetters = (text) => {
    return figletApp.textSync((text), {
    font: 'diamond',
    horizontalLayout: 'default',
    verticalLayout: 'default'
})
}

module.exports.drawLetters = drawLetters;