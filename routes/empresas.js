const express = require('express');
const router = express.Router();
const EmpresaController = require('../controller/EmpresaController');

router.post('/empresas', EmpresaController.createEmpresa);

module.exports = router;