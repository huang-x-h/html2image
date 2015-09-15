/**
 * Created by huangxinghui on 2015/9/15.
 */

var page = require('webpage').create(),
    system = require('system'),
    address, output;

address = system.args[1];
output = system.args[2];

page.open(address, function(status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit(1);
    } else {
        window.setTimeout(function () {
            page.render(output);
            phantom.exit();
        }, 200);
    }
});