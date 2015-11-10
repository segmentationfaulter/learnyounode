var filterdLs = require('./ls_module');

filterdLs(process.argv[2], process.argv[3], (err, list) => {
  if (err) throw err;
  list.forEach((file) => {
    console.log(file);
  })
})
