const http = require('http');
const {drawLetters} = require('./figletApp');
const hostname = '127.0.0.1';
const port = 3001;

const generatedText = drawLetters('DEJAN');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(generatedText);
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
