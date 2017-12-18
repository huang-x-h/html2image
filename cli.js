#! /usr/bin/env node

var program = require('commander');
var screenCapture = require('./screencapture');
var pkg = require('./package.json');

program
    .version(pkg.version)
    .option('-a, --address [value]', 'html address')
    .option('-f, --format [value]', 'output file format', /^(pdf|png|jpeg|gif)$/i, 'pdf')
    .option('-o, --output [value]', 'output file path', './')
    .parse(process.argv);

screenCapture(program.address, program.format, program.output);