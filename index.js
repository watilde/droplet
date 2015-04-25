var getTermSize = require('./lib/getTermSize');

getTermSize(function(cols, lines) {
  console.log(cols, lines);
})
