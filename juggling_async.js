'use strict';
const http = require('http');

let urls = [];
for (let i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

let results = ['', '', ''];
http.get(urls[0], (res0) => {
  res0.on('data', (chunk) => {
    results[0] += chunk;
  });
  res0.on('end', () => {
    console.log(results[0])
    http.get(urls[1], (res1) => {
      res1.on('data', (chunk) => {
        results[1] += chunk;
      });
      res1.on('end', () => {
        console.log(results[1]);
        http.get(urls[2], (res2) => {
          res2.on('data', (chunk) => {
            results[2] += chunk;
          })
          res2.on('end', () => {
            console.log(results[2]);
          })
        });
      })
    });
  });
});
