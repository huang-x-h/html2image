/**
 * Created by huangxinghui on 2015/9/15.
 */

const childProcess = require('child_process');
const phantomjs = require('phantomjs-prebuilt');
const ora = require('ora');
const mkdirp = require('mkdirp');

function screenCapture(address, format, output) {
    const spinner = ora(`Open address ${address}`).start();

    mkdirp.sync(output);

    var program = phantomjs.exec('./lib/screencapture.js', address, format, output);
    program.stderr.pipe(process.stderr);
    program.stdout.pipe(process.stdout);
    program.on('exit', code => {
        if (code === 0) {
            spinner.succeed(`Convert address ${address} succeed`);
        } else {
            spinner.fail(`Load address ${address} fail`);
        }
    });
}

module.exports = screenCapture;