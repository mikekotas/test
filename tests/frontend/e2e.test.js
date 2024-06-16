const puppeteer = require('puppeteer');

describe('End-to-End Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000');
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Button click should show alert', async () => {
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Button clicked!');
            await dialog.dismiss();
        });
        await page.click('#click-me');
    });
});
