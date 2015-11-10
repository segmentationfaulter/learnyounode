var http = require('http');

var data = '';
var reqClient = http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data.length);
    console.log(data);
  });
});

reqClient.on('error', () => {
  console.error('some error occured');
});
reqClient.end();
