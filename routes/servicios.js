const express = require('express');
const router = express.Router();
const ServicioController = require('../controllers/ServicioController');

router.post('/servicios', ServicioController.createServicio);

module.exports = router;
