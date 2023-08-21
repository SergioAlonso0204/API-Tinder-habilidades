const Servicio = require('../models/Servicio');

const ServicioController = {
  createServicio: async (req, res) => {
    try {
      const servicioData = req.body;
      const newServicio = await Servicio.create(servicioData);
      res.json(newServicio);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el servicio' });
    }
  },

};

module.exports = ServicioController;
