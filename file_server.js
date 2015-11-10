'use strcit';
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const str = fs.createReadStream(process.argv[3]);
  str.on('data', (chunk) => {
    res.write(chunk);
  });
  str.on('end', () => {
    res.end();
  })
})
server.listen(process.argv[2]);
