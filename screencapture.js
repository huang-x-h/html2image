/**
 * Created by huangxinghui on 2015/9/15.
 */

import ora from 'ora';
import mkdirp from 'mkdirp';
import pdfExporter from './lib/pdf.js';
import imgExporter from './lib/img.js';

async function screenCapture(address, format, output) {
  const spinner = ora(`Open address ${address}`).start();

  mkdirp.sync(output);

  try {
    if (format === 'pdf') {
      await pdfExporter(address, output);
    } else {
      await imgExporter(address, output, format);
    }
    spinner.succeed(`Convert address ${address} succeed`);
  } catch (e) {
    spinner.fail(`Load address ${address} fail`);
  }
}

export default screenCapture;
