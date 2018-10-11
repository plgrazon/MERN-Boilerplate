const router = require('express').Router();

const { testController } = require('../controller/testController');

router.route('/test')
  .get(testController.get)
  .post(testController.post)
  .put(testController.put)
  .delete(testController.delete)

module.exports = {
  router: router
};
