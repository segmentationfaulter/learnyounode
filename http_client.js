var http = require('http');

var reqClient = http.get(process.argv[2], (res) => {
  res.setEncoding('utf8')
  res.on('data', (data) => {
    console.log(data);
  })
});

reqClient.on('error', () => {
  console.error('some error occured')
})

reqClient.end();
