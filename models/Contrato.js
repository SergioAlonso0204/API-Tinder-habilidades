const knex = require('../knex');

class Contrato {
  static async create(data) {
    return knex('contratos').insert(data).returning('*');
  }

  // Implementa más métodos de acuerdo a tus necesidades
}

module.exports = Contrato;
