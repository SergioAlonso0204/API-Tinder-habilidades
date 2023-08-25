const express = require('express');
const router = express.Router();
const ServicioController = require('../controller/ServicioController');
const knex = require('../db/knexfile');

router.post('/servicios', ServicioController.createServicio);

module.exports = router;
