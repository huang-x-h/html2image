#! /usr/bin/env node

var program = require('commander');
var screenCapture = require('./screencapture');

program
    .version('1.0.0')
    .option('-a, --address [value]', 'html address')
    .option('-f, --format [value]', 'output file format', 'pdf')
    .option('-p, --proxy', 'use socks5 proxy')
    .parse(process.argv);

screenCapture(program.address, program.format, program.proxy);