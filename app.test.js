const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');

describe('Test the basic paths', () => {
    
    beforeAll(() => {
        console.log('hey there');
    });
    afterAll(() => {
        console.log('bye bye');
    });

    test('Route should respond with the basic greeting', (done) => {
        request(app).get('/').then((response) => {
            expect(response.text).toBe('hello there!');
            done();
        });
    });

    test('products should respond with the list of products', (done) => {
        request(app).get('/products').then((response) => {
            expect(response.body).toHaveLength(4);
            done();
        });
    });

    test('specific product should respond with the correct one', (done) => {
        request(app).get('/').then((response) => {
            expect(response.text).toBe('hello there!');
            done();
        });
    });
});