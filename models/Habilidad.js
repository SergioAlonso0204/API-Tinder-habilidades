const knex = require('../knex');

class Habilidad {
  static async getAll() {
    return knex('habilidades');
  }

}

module.exports = Habilidad;
