#! /usr/bin/env node

var program = require('commander');
var screenCapture = require('./lib/screencapture');

program
    .version('1.0.0')
    .option('-u, --url', 'html url')
    .option('-o, --output', 'output file name')
    .parse(process.argv);

screenCapture(program.url, program.output);