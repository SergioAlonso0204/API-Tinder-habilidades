const knex = require('../knex');

class Empresa {
  static async create(data) {
    return knex('empresas').insert(data).returning('*');
  }

}

module.exports = Empresa;
