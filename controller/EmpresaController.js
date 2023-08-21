const Empresa = require('../models/Empresa');

const EmpresaController = {
  createEmpresa: async (req, res) => {
    try {
      const empresaData = req.body;
      const newEmpresa = await Empresa.create(empresaData);
      res.json(newEmpresa);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la empresa' });
    }
  },

};

module.exports = EmpresaController;
