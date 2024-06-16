const request = require('supertest');
const app = require('../../src/server');

describe('Functional Tests', () => {
    test('Server should serve index.html', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('<title>Example Node Project</title>');
    });
});
