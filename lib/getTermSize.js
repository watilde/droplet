var spawn = require('child_process').spawn
module.exports = function getTermSize(cb) {
  spawn('resize').stdout.on('data', function(data) {
    data = String(data)
    var lines = data.split('\n');
    var cols = Number(lines[0].match(/^COLUMNS=([0-9]+);$/)[1]);
    var lines = Number(lines[1].match(/^LINES=([0-9]+);$/)[1]);
    if (cb) cb(cols, lines)
  })
}
