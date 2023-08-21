const knex = require('../knex');

class UsuarioHabilidad {
  static async create(data) {
    return knex('usuarios_habilidades').insert(data);
  }

}

module.exports = UsuarioHabilidad;
