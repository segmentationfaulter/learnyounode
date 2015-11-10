'use strict';
const http = require('http');
const url = require('url');

const server = http.createServer();
server.on('request', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const queriedTime = parsedUrl.query.iso;
  const endpoint = parsedUrl.pathname;
  res.writeHead(200, {'Content-Type': 'application/json'});
  if (endpoint === '/api/unixtime') {
    const unixtime = Date.parse(queriedTime);
    res.end(JSON.stringify({'unixtime': unixtime}));
  } else if (endpoint === '/api/parsetime') {
    const date = new Date(queriedTime);
    const parsedDate = {
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(parsedDate));
  } else {
    res.writeHead(404, 'Not Found');
    res.end();
  }
});
server.listen(process.argv[2]);
