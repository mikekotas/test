const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('Front-End Integration Tests', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><body><button id="click-me">Click Me</button></body>`);
        document = dom.window.document;
        require('../public/script'); // This will simulate script.js
    });

    test('Button click should show alert', () => {
        const button = document.getElementById('click-me');
        expect(button).not.toBeNull();
        // Mock the alert function
        global.alert = jest.fn();
        button.click();
        expect(global.alert).toHaveBeenCalledWith('Button clicked!');
    });
});
