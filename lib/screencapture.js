/**
 * Created by huangxinghui on 2015/9/15.
 */

var phantom = require('phantom');
var debug = require('debug')('screencapture');
var defaultFileName = 'output.png';

function screenCapture(url, output) {
    output = output || defaultFileName;

    phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.open(url, function (state) {
                debug("opened %s? ", url, status);

                page.render(output);
                ph.exit();
            });
        });
    });
}

module.exports = screenCapture;