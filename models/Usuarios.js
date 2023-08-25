const knex = require('../db/knexfile');

class Usuario {
  static getAll() {
    return knex('usuarios');
  }

  static getById(id) {
    return knex('usuarios').where({ id }).first();
  }

  static create(usuarioData) {
    return knex('usuarios').insert(usuarioData).returning('*');
  }

  static update(id, usuarioData) {
    return knex('usuarios').where({ id }).update(usuarioData, ['id', 'nombres', 'tipodocumento', 'numerodocumento', 'correo', 'celular', 'tipousuario']);
  }

  static delete(id) {
    return knex('usuarios').where({ id }).del();
  }

}

module.exports = Usuario;
