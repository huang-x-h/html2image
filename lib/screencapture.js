/**
 * Created by huangxinghui on 2015/9/15.
 */

var childProcess = require('child_process');
var path = require('path');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

function screenCapture(address, output, proxy) {
    console.log('opened address %s, ouput filename %s', address, output);

    var childArgs = [
        path.join(__dirname, '../phantom/screencapture.js')
        , address
        , output
    ];

    if (proxy) {
        childArgs = ['--proxy=127.0.0.1:1080', '--proxy-type=socks5'].concat(childArgs);
    }

    childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(stdout);
    });
}

module.exports = screenCapture;