'use strict';
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5000', { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'document.pdf', format: 'Letter' });

    await browser.close();
})();