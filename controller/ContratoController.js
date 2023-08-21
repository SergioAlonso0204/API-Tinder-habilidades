const Contrato = require('../models/Contrato');

const ContratoController = {
  createContrato: async (req, res) => {
    try {
      const contratoData = req.body;
      const newContrato = await Contrato.create(contratoData);
      res.json(newContrato);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el contrato' });
    }
  },

};

module.exports = ContratoController;
