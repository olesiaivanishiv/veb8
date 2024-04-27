const http = require('node:http');

const hostname = 'localhost';
const port = 3008;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ivanishiv Olesia, OI-21');
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущено на http://${hostname}:${port}/`);
});
