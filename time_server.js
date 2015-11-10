'use strict';
const net = require('net');
const moment = require('moment');

const server = net.createServer((socket) => {
  const date = moment().format("YYYY-MM-DD HH:mm");
  socket.write(String(date));
  socket.pipe(process.stdout);
  socket.end();
})
server.listen(process.argv[2]);
