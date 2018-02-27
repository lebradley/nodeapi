const expect = require('chai').expect;
const assert = require('chai').assert;
const mockery = require('mockery');
const sinon = require('sinon');

// Mock the product model and then do tests that way? 

describe.only('unit tests of CRUD product controller', function() {
    let productController, mockedReq, mockedRes;

    let find = sinon.stub();   

    let findById = sinon.stub();
    findById.withArgs(4).returns('lovely object');
    findById.withArgs(5).throws(new Error('incorrect id'));
    
    const productMock = {
        find: find,
        findById: findById
    };

    before(() => {
        mockery.enable({
          warnOnUnregistered: false,
          useCleanCache: true,
        });

        mockery.registerMock('./productModel', productMock);
        productController = require('../src/products/productController');

    });

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        mockedReq = {};
        mockedRes = {
            send: sinon.stub(),
            sendStatus: sinon.stub()
        };
    });
    
    afterEach(() => {
        sandbox.restore();
    });

    after(() => {
          mockery.deregisterAll();
          mockery.disable();
    })

    it('should call product.find and res.send methods', function(done){
        productController.getAll(mockedReq, mockedRes);
        setTimeout(() => {
            expect(productMock.find.calledOnce).to.equal(true);
            //expect(mockedRes.send.calledOnce).to.equal(true);
            done();
        })
    });
    it.only('should call and fail find when given error', function(done){
        productMock.find = sinon.stub();
        mockedReq = {
            err: new Error()
        };
        productController.getAll(mockedReq, mockedRes);
        setTimeout(() => {
            expect(productMock.find.calledOnce).to.equal(true);
            expect(mockedRes.sendStatus.calledOnce).to.equal(true);
            // expect(productMock.find.returned(Error)).to.equal(true);
            done();
        })
    });

    it('find by id is called with valid id', function(done){
        mockedReq = {
            params: {
                id: 4
            }
        };
        productController.getById(mockedReq, mockedRes);
        setTimeout(() => {
            expect(productMock.findById.calledOnce).to.equal(true);
            done();
        })
    });

    //NOT WORKING
    it('find by id returns error with incorrect id', function(done){
        mockedReq = {
            params: {
                id: 5
            }
        };
        productController.getById(mockedReq, mockedRes);
        setTimeout(() => {
            expect(productMock.findById.returns(Error));
            done();
        })
    });
});