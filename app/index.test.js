const request = require('supertest');
const app = require('./index');

describe('Express App', () => {
    it("GET / returns Hello World", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hello World");
    });

    it("GET /:input returns Hello World with input", async () => {
        const res = await request(app).get("/Zaki");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hello World Zaki");
    });
});