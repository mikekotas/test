const request = require('supertest');
const app = require('../../src/server');

describe('API Integration Tests', () => {
    test('GET /api/sum should return sum of a and b', async () => {
        const response = await request(app).get('/api/sum?a=1&b=2');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 3 });
    });
});
