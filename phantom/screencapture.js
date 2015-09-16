/**
 * Created by huangxinghui on 2015/9/15.
 */

// copy from https://github.com/ariya/phantomjs/blob/master/examples/rasterize.js
var page = require('webpage').create(),
    system = require('system'),
    address, output, format, size;

if (system.args.length < 3 || system.args.length > 5) {
    console.log('Usage: rasterize.js URL filename [paperwidth*paperheight|paperformat] [zoom]');
    console.log('  paper (pdf output) examples: "5in*7.5in", "10cm*20cm", "A4", "Letter"');
    console.log('  image (png/jpg output) examples: "1920px" entire page, window width 1920px');
    console.log('                                   "800px*600px" window, clipped to 800x600');
    phantom.exit(1);
} else {
    address = system.args[1];
    format = system.args[2];

    if (format === 'padf') {
        page.paperSize = { format: 'A4', orientation: 'portrait', margin: '1cm' }
    }

    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit(1);
        } else {
            output = page.evaluate(function () {
                return document.querySelector('title').textContent;
            }) + '.' + format;

            window.setTimeout(function () {
                page.render(output);
                phantom.exit();
            }, 200);
        }
    });
}