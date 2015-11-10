'use strict';
const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
  req.on('data', (chunk) => {
    res.write(chunk.toString().toUpperCase());
  });
  req.on('end', () => {
    res.end();
  });
});

server.listen(process.argv[2]);
