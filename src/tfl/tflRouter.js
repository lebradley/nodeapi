const tflRouter = require('express').Router();
const tflController = require('./tflController');

tflRouter.route('/')
    .get(tflController.sayhello);

tflRouter.route('/line/:id')
    .get(tflController.getLineInfoById);

tflRouter.route('/jupiter')
    .get(tflController.jupiter);

module.exports = tflRouter;