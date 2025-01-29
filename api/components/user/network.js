const express = require('express');
const response = require('../../../network/response');
const controller = require('./user-controller');

const router = express.Router();

router.get('/', (req, res) => {
    const lista = controller.list();
    response.success(req, res, lista);
});

module.exports = router;