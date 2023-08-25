const knex = require('../db/knexfile');

class Empresa {
  static async create(data) {
    return knex('empresas').insert(data).returning('*');
  }

}

module.exports = Empresa;
