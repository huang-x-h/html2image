// copy from https://github.com/puppeteer/puppeteer/blob/main/examples/pdf.js

import puppeteer from 'puppeteer';

const pdfExporter = async (address, output) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(address, {
    waitUntil: 'networkidle2',
  });

  let title = await page.title();
  console.log('title', title)

  // page.pdf() is currently supported only in headless mode.
  // @see https://bugs.chromium.org/p/chromium/issues/detail?id=753118
  await page.pdf({
    path: `${output}/${title}.pdf`,
    format: 'letter',
  });

  await browser.close();
};

export default pdfExporter;
