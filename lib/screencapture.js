// /**
//  * Created by huangxinghui on 2015/9/15.
//  */

// // copy from https://github.com/ariya/phantomjs/blob/master/examples/rasterize.js

"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address = system.args[1],
    format = system.args[2],
    output = system.args[3];

page.viewportSize = { width: 1024, height: 600 };
if (format === 'pdf') {
    page.paperSize = { format: 'A4', orientation: 'portrait', margin: '1cm' }
}

page.open(address, function (status) {
    if (status !== 'success') {
        phantom.exit(1);
    } else {
        output = output + '/' + page.evaluate(function () {
            return document.title;
        }) + '.' + format;

        window.setTimeout(function () {
            page.render(output);
            phantom.exit();
        }, 200);
    }
});