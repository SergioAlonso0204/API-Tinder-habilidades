const Usuario = require('../models/Usuarios');
const knex = require('../db/knexfile');

const UsuarioController = {
  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.getAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  },

  getUsuarioById: async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await Usuario.getById(id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  },

  createUsuario: async (req, res) => {
    const usuarioData = req.body;
    try {
      const nuevoUsuario = await Usuario.createUsuario(usuarioData);
      res.json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  },


  updateUsuario: async (req, res) => {
    const { id } = req.params;
    const usuarioData = req.body;
    try {
      const usuarioActualizado = await Usuario.update(id, usuarioData);
      if (usuarioActualizado.length > 0) {
        res.json(usuarioActualizado[0]);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  },

  deleteUsuario: async (req, res) => {
    const { id } = req.params;
    try {
      const cantidadEliminados = await Usuario.delete(id);
      if (cantidadEliminados > 0) {
        res.json({ mensaje: 'Usuario eliminado exitosamente' });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  },

getUserHabilidades: async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.getById(id);
    if (usuario) {
      // Aquí puedes implementar la lógica para obtener las habilidades del usuario
      // Por ejemplo, puedes tener un método en tu modelo Usuario que obtenga las habilidades
      // Supongamos que tienes un método llamado getHabilidades en tu modelo Usuario
      const habilidades = await usuario.getHabilidades();
      res.json(habilidades);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las habilidades del usuario' });
  }
},

};

module.exports = UsuarioController;
