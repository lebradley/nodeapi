const request = require('supertest');
const expect = require('chai').expect;
const mongoose = require('mongoose');
// const app = require('../src/app');

describe.skip('Test the basic paths', () => {

    it('should know that true is true', function() {
        expect(1==1).to.equal(true);
    });

    it('products should respond with the list of products', function(done) {
        request(app).get('/products').then((response) => {
            expect(response.body).to.have.lengthOf(5);
            done();
        });
    });
});

// Leaving testing this now for the moment as it brings it out of unit tests (e.g. app connects to db etc.)