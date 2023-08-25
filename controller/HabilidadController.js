const Habilidad = require('../models/Habilidad');
const knex = require('../db/knexfile');

const HabilidadController = {
  getAllHabilidades: async (req, res) => {
    try {
      const habilidades = await Habilidad.getAll();
      res.json(habilidades);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener habilidades' });
    }
  },

  createHabilidad: async (req, res) => {
    try {
      const habilidadData = req.body;
      const newHabilidad = await Habilidad.create(habilidadData);
      res.json(newHabilidad);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la habilidad' });
    }
  },

};

module.exports = HabilidadController;
