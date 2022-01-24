#! /usr/bin/env node

import { Command, Option } from 'commander/esm.mjs';
import screenCapture from './screencapture.js';

const program = new Command();
program
  .version('2.0.0')
  .requiredOption('-a, --address <value>', 'html address')
  .addOption(
    new Option('-f, --format [value]', 'output file format').choices(['pdf', 'png', 'jpeg', 'gif']).default('pdf')
  )
  .option('-o, --output [value]', 'output file path', './')
  .addHelpText('after', '\nExample: \n  $ html2image -a https://www.baidu.com -f png -o ./output');

program.parse(process.argv);
const options = program.opts();
(async () => {
  await screenCapture(decodeURIComponent(options.address), options.format, options.output);
})();
