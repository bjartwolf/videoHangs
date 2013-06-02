var fs = require('fs');
var spawn = require('child_process').spawn;

var ffplay = spawn('ffplay', [
    '-autoexit',
    '-'
], ['pipe', 'ignore', 'ignore']);
ffplay.stdout.pipe(process.stdout);
var videoStream = fs.createReadStream('ytdl.mp4');

videoStream.pipe(ffplay.stdin);
