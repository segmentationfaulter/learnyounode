var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extension, cb) {
  fs.readdir(dirName, (err, list) => {
    if (err) {
      return cb(err, null);
    }
    var filteredList = list.filter((file) => path.extname(file) === '.' + extension);
    return cb(null, filteredList);
  });
}
