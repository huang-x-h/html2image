// copy from https://github.com/puppeteer/puppeteer/blob/main/examples/screenshot-fullpage.js

import puppeteer from 'puppeteer';

const imgExporter = async (address, output, format) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(puppeteer.devices['iPhone 6']);
  await page.goto(address);

  let title = await page.title();

  await page.screenshot({ path: `${output}/${title}.${format}`, fullPage: true });
  await browser.close();
};

export default imgExporter;
