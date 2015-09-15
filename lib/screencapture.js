/**
 * Created by huangxinghui on 2015/9/15.
 */

var childProcess = require('child_process');
var path = require('path');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

function screenCapture(address, output) {
    console.log('opened address %s, ouput filename %s', address, output);

    var childArgs = [
        path.join(__dirname, '../phantom/screencapture.js')
        , address
        , output
    ];

    childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(stdout);
    });
}

module.exports = screenCapture;