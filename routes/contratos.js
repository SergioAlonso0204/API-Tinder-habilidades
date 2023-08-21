const express = require('express');
const router = express.Router();
const ContratoController = require('../controllers/ContratoController');

router.post('/contratos', ContratoController.createContrato);

module.exports = router;
