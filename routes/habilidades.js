const express = require('express');
const router = express.Router();
const HabilidadController = require('../controllers/HabilidadController');

router.get('/habilidades', HabilidadController.getAllHabilidades);
router.post('/habilidades', HabilidadController.createHabilidad);

module.exports = router;
