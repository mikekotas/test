// Jest doesn't directly support DOM manipulations, so we use jsdom
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('Front-End Unit Tests', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><body><button id="click-me">Click Me</button></body>`);
        document = dom.window.document;
    });

    test('Button should exist', () => {
        const button = document.getElementById('click-me');
        expect(button).not.toBeNull();
    });
});
