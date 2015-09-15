#! /usr/bin/env node

var program = require('commander');
var screenCapture = require('./lib/screencapture');

program
    .version('1.0.0')
    .option('-a, --address [value]', 'html address')
    .option('-o, --output [value]', 'output file name', 'output.png')
    .option('-p, --proxy', 'use socks5 proxy')
    .parse(process.argv);

screenCapture(program.address, program.output, program.proxy);