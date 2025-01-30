const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const lista = await controller.list();
        response.success(req, res, lista, 200);
    } catch (err) {
        response.error(req, res, err.message, 500)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await controller.get(req.params.id);
        response.success(req, res, data, 200);
    } catch (err) {
        response.error(req, res, err.message, err.statusCode);
    }
}); 



module.exports = router;