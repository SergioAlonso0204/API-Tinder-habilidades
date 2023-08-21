const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/usuarios', UserController.getAllUsers);
router.get('/usuarios/:id', UserController.getUserById);
router.post('/usuarios', UserController.createUser);
router.put('/usuarios/:id', UserController.updateUser);
router.delete('/usuarios/:id', UserController.deleteUser);

router.get('/usuarios/:id/habilidades', UserController.getUserHabilidades);

module.exports = router;
