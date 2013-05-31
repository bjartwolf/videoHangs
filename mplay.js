var fs = require('fs');
var spawn = require('child_process').spawn;

var mplayer = spawn('mplayer', ['-'])
var videoStream = fs.createReadStream('ytdl.mp4');

videoStream.pipe(mplayer.stdin);
