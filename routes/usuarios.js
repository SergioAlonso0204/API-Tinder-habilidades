const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/UsuarioController');
const knex = require('../db/knexfile');

router.get('/usuarios', UsuarioController.getAllUsuarios);
router.get('/usuarios/:id', UsuarioController.getUsuarioById);
router.post('/usuarios', UsuarioController.createUsuario);
router.put('/usuarios/:id', UsuarioController.updateUsuario);
router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

router.get('/usuarios/:id/habilidades', UsuarioController.getUserHabilidades);

module.exports = router;
