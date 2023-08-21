const express = require('express');
const router = express.Router();
const EmpresaController = require('../controllers/EmpresaController');

router.post('/empresas', EmpresaController.createEmpresa);

module.exports = router;