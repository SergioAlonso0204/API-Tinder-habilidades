const express = require('express');
const router = express.Router();
const knex = require('../db/knexfile');
const HabilidadController = require('../controller/HabilidadController');

router.get('/habilidades', HabilidadController.getAllHabilidades);
router.post('/habilidades', HabilidadController.createHabilidad);

module.exports = router;
