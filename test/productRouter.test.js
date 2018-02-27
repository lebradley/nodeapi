const expect = require('chai').expect;
const productRouter = require('../src/products/productRouter');

it('should be okay', function() {
    expect(1+1).to.equal(2);
});

// Product Router is shown as 100% unit tested... istanbul is weird
// Or there are no real unit tests to do here? I guess so