const knex = require('../db/knexfile');

class Habilidad {
  static async getAll() {
    return knex('habilidades');
  }

}

module.exports = Habilidad;
