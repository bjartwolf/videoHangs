var fs = require('fs');
var spawn = require('child_process').spawn;

var ffplay = spawn('ffplay', [
    '-autoexit',
    '-'
]);

var videoStream = fs.createReadStream('ytdl.mp4');

videoStream.pipe(ffplay.stdin);
