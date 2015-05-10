var black   = '\u001b[30m';
var red     = '\u001b[31m';
var green   = '\u001b[32m';
var yellow  = '\u001b[33m';
var blue    = '\u001b[34m';
var magenta = '\u001b[35m';
var cyan    = '\u001b[36m';
var white   = '\u001b[37m';

var reset   = '\u001b[0m';

var size = require('./lib/getTermSize');
var charm = require('charm')();
charm.pipe(process.stdout);
charm.reset();

size(function (cols, lines) {
  var i = 0, ii = 0;
  var width = cols - 1;
  var height = lines - 1;
  setInterval(function () {
    var text = '', tmp = '';
    for (var y = 0; height > y; y++) {
      for (var x = 0; width > x; x++) {
        tmp = reset + '■';
        if (x === i) { tmp =  magenta + '■'; }
        if (y === ii) { tmp = red + '■'; }
        text += tmp;
      }
      text += '\n';
    }
    charm
      .move(0, 0)
      .write(text)
    charm.position(0, 0);
    ii++;
    i++;
    if (i === width) i = 0;
    if (ii === height) ii = 0;
  }, 25);
});
