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

    test('products should respond with the list of products', (done) => {
        request(app).get('/products').then((response) => {
            expect(response.body).toHaveLength(4);
            done();
        });
    });
});